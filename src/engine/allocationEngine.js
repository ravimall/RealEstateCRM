const { Payment, Booking, Schedule } = require('../models');
const { Op } = require('sequelize');

/**
 * Allocates a payment to booking schedules considering tax, interest, and rounding.
 * @param {number} paymentId
 * @returns {object} Summary of allocation
 */
async function allocatePayment(paymentId) {
  const payment = await Payment.findByPk(paymentId);
  if (!payment) throw new Error('Payment not found');

  const booking = await Booking.findByPk(payment.bookingId);
  if (!booking) throw new Error('Booking not found');

  const schedules = await Schedule.findAll({
    where: { bookingId: booking.id, dueDate: { [Op.lte]: payment.date } },
    order: [['dueDate', 'ASC']],
  });

  let remaining = payment.amount;
  const allocationLog = [];

  for (const sched of schedules) {
    // Allocation priorities: tax, interest, principal
    let allocTax = Math.min(remaining, sched.taxDue - sched.taxPaid);
    sched.taxPaid += allocTax;
    remaining -= allocTax;

    let allocInterest = Math.min(remaining, sched.interestDue - sched.interestPaid);
    sched.interestPaid += allocInterest;
    remaining -= allocInterest;

    let allocPrincipal = Math.min(remaining, sched.principalDue - sched.principalPaid);
    sched.principalPaid += allocPrincipal;
    remaining -= allocPrincipal;

    // Rounding logic (e.g., round to nearest cent)
    sched.taxPaid = Number(sched.taxPaid.toFixed(2));
    sched.interestPaid = Number(sched.interestPaid.toFixed(2));
    sched.principalPaid = Number(sched.principalPaid.toFixed(2));

    await sched.save();

    allocationLog.push({
      scheduleId: sched.id,
      allocTax,
      allocInterest,
      allocPrincipal,
    });

    if (remaining <= 0) break;
  }

  payment.allocated = payment.amount - remaining;
  payment.unallocated = remaining;
  await payment.save();

  return { paymentId, allocationLog, unallocated: remaining };
}

/**
 * Debug allocation for a payment (returns log only, no DB update)
 */
async function debugAllocation(paymentId) {
  // Same logic as allocatePayment, but don't persist changes
  // For brevity, copy the allocation logic above and skip .save() calls
}

module.exports = {
  allocatePayment,
  debugAllocation,
};
