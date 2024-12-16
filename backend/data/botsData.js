// backend/data/botsData.js
let bots = []

function getBotsData() {
  return bots
}

function addBot(bot) {
  bots.push(bot)
}

function updateBot(id, fields) {
  const index = bots.findIndex(bot => bot.id === id)
  if (index === -1) return
  bots[index] = { ...bots[index], ...fields }
}

function findBotById(id) {
  return bots.find(bot => bot.id === id)
}

export {
  getBotsData,
  addBot,
  updateBot,
  findBotById
}