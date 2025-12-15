// Single file for all FR2 calculation logic

/**
 * Validates an entry object.
 * @param {Object} entry - { amount: number, price: number, quantity: number }
 * @returns {string|null} Error message or null if valid
 */
export function validateEntry(entry) {
  if (typeof entry.amount !== 'number' || entry.amount <= 0) {
    return 'Amount must be a positive number.';
  }
  if (typeof entry.price !== 'number' || entry.price <= 0) {
    return 'Price must be a positive number.';
  }
  if (typeof entry.quantity !== 'number' || entry.quantity <= 0) {
    return 'Quantity must be a positive number.';
  }
  return null;
}

/**
 * Calculates quantity from amount and price.
 * @param {number} amount
 * @param {number} price
 * @returns {number} Quantity rounded to 8 decimal places
 */
export function calculateQuantity(amount, price) {
  if (price === 0) return 0;
  return parseFloat((amount / price).toFixed(8));
}

/**
 * Calculates DCA average entry price.
 * @param {Array<Object>} entries - Array of { amount, price, quantity }
 * @returns {Object} { totalAmount, totalQuantity, averageEntry }
 */
export function calculateDCA(entries) {
  let totalAmount = 0;
  let totalQuantity = 0;

  entries.forEach((entry) => {
    totalAmount += entry.amount;
    totalQuantity += entry.quantity;
  });

  const averageEntry = totalQuantity > 0 ? totalAmount / totalQuantity : 0;

  return {
    totalAmount: parseFloat(totalAmount.toFixed(2)),
    totalQuantity: parseFloat(totalQuantity.toFixed(8)),
    averageEntry: parseFloat(averageEntry.toFixed(2))
  };
}