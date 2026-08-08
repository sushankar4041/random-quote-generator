export const getFilteredQuotes = (quotes, category) => {
  if (category === 'all') return quotes;
  return quotes.filter(q => q.category === category);
};

export const getRandomQuote = (quotes) => {
  if (!quotes || quotes.length === 0) return null;
  return quotes[Math.floor(Math.random() * quotes.length)];
};