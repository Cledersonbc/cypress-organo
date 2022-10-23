const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://organo-jade-nine.vercel.app',
    viewportWidth: 1280,
    viewportHeight: 800
  }
});
