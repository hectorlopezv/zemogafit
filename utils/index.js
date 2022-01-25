export const negativeVotes = (positive, negative) => (negative / (positive + negative)) * 100
export const positivesVotes = (positive, negative) => (positive / (positive + negative)) * 100
