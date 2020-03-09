module.exports = {
  PORT: process.env.PORT || 8000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dunder_mifflin@localhost/noteful',
  CLIENT_ORIGIN: 'https://noteful-app-ruddy.now.sh' || 'localhost:3000',
};
