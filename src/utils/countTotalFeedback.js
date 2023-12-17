export const countTotalFeedback = (...total) =>
  total.reduce((acc, cur) => acc + cur, 0);
