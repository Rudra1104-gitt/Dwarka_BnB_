import express from 'express';
import cors from 'cors'; // Import the package you just added
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();

// This allows your frontend (Vercel) to talk to this backend (Render)
app.use(cors({
  origin: "*", // For now, '*' allows everything. We can restrict this later.
  methods: ["GET", "POST"]
}));

const httpServer = createServer(app);

// Update your Socket.io configuration to include CORS
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// ... rest of your code ...

const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});