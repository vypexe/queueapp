// backend/server.js
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import botsRouter from './routes/bots.js'
import http from 'http'
import { Server } from 'socket.io'
import QueueMonitor from './services/queueMonitor'

dotenv.config()

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

// Middleware
app.use(cors({
  origin: 'http://localhost:3000', // Front-end URL
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}))
app.use(express.json())

const queueMonitors = new Map()

io.on('connection', (socket) => {
    console.log('Client connected')

    socket.on('startMonitoring', ({ queueUrl }) => {
        if (!queueMonitors.has(queueUrl)) {
            const monitor = new QueueMonitor()
            
            monitor.on('statusChange', (status) => {
                io.emit('queueUpdate', { url: queueUrl, status })
            })

            monitor.on('error', (error) => {
                io.emit('monitoringError', { url: queueUrl, error: error.message })
            })

            queueMonitors.set(queueUrl, monitor)
            monitor.startMonitoring(queueUrl)
        }
        
        // Send initial status if available
        const monitor = queueMonitors.get(queueUrl)
        if (monitor.currentStatus) {
            socket.emit('queueUpdate', { url: queueUrl, status: monitor.currentStatus })
        }
    })

    socket.on('stopMonitoring', ({ queueUrl }) => {
        const monitor = queueMonitors.get(queueUrl)
        if (monitor) {
            monitor.stopMonitoring()
            queueMonitors.delete(queueUrl)
        }
    })

    socket.on('disconnect', () => {
        console.log('Client disconnected')
    })
})

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

// Error handling middleware
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.url}`,
    availableEndpoints: {
      'GET /health': 'Health check endpoint',
      'GET /api/bots': 'Get all active bots',
      'POST /api/bots': 'Create a new bot',
      'GET /api/bots/:id': 'Get a specific bot by ID'
    }
  })
})

// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  })
})

// Start the server
server.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`)
})