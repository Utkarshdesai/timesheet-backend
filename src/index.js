import express from 'express';
import cors from 'cors';
import { timesheetData, userData } from './data/mockData.js';

const app = express();
const PORT = process.env.PORT || 4000;

// Configure CORS using explicit allowed origins
const allowedOrigins = [
  "http://localhost:5173",  // Local Dev
  "https://task-management-frontend-kohl.vercel.app" // Deployed Frontend
];

// Middleware
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true // If using cookies/authentication
}));
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

// Routes
app.get('/userdata', (req, res) => {
  res.json({ data: userData });
});

app.get('/timesheetdata', (req, res) => {
  res.json({ data: timesheetData });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
