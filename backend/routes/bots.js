// backend/routes/bots.js
import express from 'express'
import botService from '../services/botService.js'

const router = express.Router()

// GET /active-bots -> Return active bots
router.get('/', async (req, res) => {
  try {
    const bots = await botService.getActiveBots()
    res.json(bots)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error fetching active bots' })
  }
})

// POST /active-bots -> Create a new bot and start it in a queue
router.post('/', async (req, res) => {
  const { name, queueType, queueParams } = req.body
  try {
    const newBot = await botService.createAndStartBot(name, queueType, queueParams)
    res.json(newBot)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error creating bot' })
  }
})

// GET /active-bots/:id -> Check specific bot status
router.get('/:id', async (req, res) => {
  const botId = parseInt(req.params.id, 10)
  try {
    const bot = await botService.getBotById(botId)
    if (!bot) {
      return res.status(404).json({ error: 'Bot not found' })
    }
    res.json(bot)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Error fetching bot' })
  }
})

export default router