const express = require('express');
const router = express.Router();
const { allocatePayment, debugAllocation } = require('../engine/allocationEngine');

// Allocate a payment (POST /api/allocate/:paymentId)
router.post('/allocate/:paymentId', async (req, res) => {
  try {
    const result = await allocatePayment(req.params.paymentId);
    res.json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Debug allocation (GET /api/allocate/debug/:paymentId)
router.get('/allocate/debug/:paymentId', async (req, res) => {
  try {
    const log = await debugAllocation(req.params.paymentId);
    res.json(log);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;
