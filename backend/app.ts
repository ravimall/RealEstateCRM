import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';

const app = express();
app.use(cors());
app.use(json());

// Example health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date() });
});

// TODO: Add routes for projects, bookings, payments, customers, users, templates, imports, allocations, documents

export default app;