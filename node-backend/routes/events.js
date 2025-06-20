import express from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = express.Router();

// Create event (requires login)
router.post('/create', async (req, res) => {
  if (!req.session.user_id) {
    return res.json({ success: false, message: 'Not authenticated.' });
  }
  const { title, description, event_date } = req.body;
  if (!title || !event_date) {
    return res.json({ success: false, message: 'Title and date are required.' });
  }
  try {
    await prisma.event.create({
      data: {
        user_id: req.session.user_id,
        title,
        description,
        event_date: new Date(event_date)
      }
    });
    res.json({ success: true, message: 'Event created.' });
  } catch (err) {
    res.json({ success: false, message: 'Database error.' });
  }
});

// List events (all or only user's events)
router.get('/list', async (req, res) => {
  const userOnly = req.query.user_only === '1';
  try {
    let events;
    if (userOnly && req.session.user_id) {
      events = await prisma.event.findMany({
        where: { user_id: req.session.user_id },
        orderBy: { event_date: 'desc' }
      });
    } else {
      events = await prisma.event.findMany({
        orderBy: { event_date: 'desc' }
      });
    }
    res.json({ success: true, events });
  } catch (err) {
    res.json({ success: false, message: 'Database error.' });
  }
});

export default router; 