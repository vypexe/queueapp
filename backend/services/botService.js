// backend/services/botService.js
import { getBotsData, addBot, updateBot, findBotById } from '../data/botsData.js'
import queueService from './queueService.js'

/**
 * Returns all active bots from the data layer.
 * In the future, you may filter by `status` to only return those actively waiting.
 */
async function getActiveBots() {
  const bots = getBotsData()
  return bots.filter(bot => bot.status !== 'Completed')
}

/**
 * Creates and starts a bot based on the queue type.
 * @param {string} name - Name of the bot
 * @param {string} queueType - 'web' or 'phone'
 * @param {object} queueParams - Parameters needed (like URL for web, phone number for phone)
 */
async function createAndStartBot(name, queueType, queueParams) {
  const newBot = {
    id: Date.now(),
    name,
    status: 'Waiting', // Initial status
    position: null
  }
  addBot(newBot)

  // Start the queue process asynchronously
  queueService.startQueueProcess(newBot.id, queueType, queueParams)
    .catch(err => console.error(`Error starting queue for bot ${newBot.id}: `, err))

  return newBot
}

export default {
  getActiveBots,
  createAndStartBot
}