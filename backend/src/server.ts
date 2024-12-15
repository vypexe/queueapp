// backend/src/server.ts
import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Types
interface QueueStatus {
  position: number;
  estimatedWait: number;
}

// Mock Queue Data
let currentPosition: number = 5; // Example position
const avgWaitPerPerson: number = 2; // Minutes per person

// Endpoint to get queue status
app.get('/queue-status', (req: Request, res: Response<QueueStatus>) => {
  const estimatedWait = currentPosition * avgWaitPerPerson;
  res.json({ position: currentPosition, estimatedWait });
});

// Endpoint to interact with AI (placeholder)
app.post('/ask-ai', async (req: Request, res: Response) => {
  const userQuestion: string = req.body.question;
  // TODO: Integrate with actual AI API
  res.json({ response: `I see you are ${currentPosition} in line. Hang tight!` });
});

// Start the server
const PORT: number = 3000;
app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});