// backend/routes/bots.js
import express from 'express';
import { activeBots } from '../data/botsData.js';

const router = express.Router();

// Get all active bots
router.get('/', (req, res) => {
  res.json(activeBots);
});

// Get a specific bot by ID
router.get('/:id', (req, res) => {
  const bot = activeBots.find(b => b.id === parseInt(req.params.id));
  if (!bot) {
    return res.status(404).json({ error: 'Bot not found' });
  }
  res.json(bot);
});

// Create a new bot
router.post('/', (req, res) => {
  const { name, status } = req.body;
  if (!name || !status) {
    return res.status(400).json({ error: 'Name and status are required' });
  }

  const newBot = {
    id: activeBots.length + 1,
    name,
    status,
    position: status === 'Active' ? activeBots.length + 1 : null
  };

  activeBots.push(newBot);
  res.status(201).json(newBot);
});

export default router;