// backend/server.js
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import botsRouter from './routes/bots.js'

const app = express()
app.use(cors())
app.use(express.json())

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Queue Web App API',
    endpoints: {
      'GET /health': 'Health check endpoint',
      'GET /api/bots': 'Get all active bots',
      'POST /api/bots': 'Create a new bot',
      'GET /api/bots/:id': 'Get a specific bot by ID'
    }
  })
})

// Routes
app.use('/api/bots', botsRouter)

// Health Check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' })
})

// Start the server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})