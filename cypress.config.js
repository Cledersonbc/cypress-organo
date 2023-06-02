const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
	e2e: {
		baseUrl: 'https://organo-jade-nine.vercel.app',
		viewportWidth: 1280,
		viewportHeight: 800,
		specPattern: 'cypress/e2e/**/*.feature',
		log: false,
		setupNodeEvents(on, config) {
			on('file:preprocessor', cucumber())

			return config
		}
	}
})