/**
 * Get percentage of negative votes
 * @date 2022-01-25
 * @param {number} positive
 * @param {number} negative
 * @returns {float}
 */
export const negativeVotes = (positive, negative) => (negative / (positive + negative)) * 100

/**
 * Get percentage of positive votes
 * @param {number} positive
 * @param {number} negative
 * @returns {float}
 */
export const positivesVotes = (positive, negative) => (positive / (positive + negative)) * 100
