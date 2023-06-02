const report = require('multiple-cucumber-html-reporter')
const os = require('os')

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: 'cypress/reports/cucumber-htmlreport.html',
	metadata: {
		browser: {
			name: 'Firefox',
			version: '110',
		},
		device: 'Local test machine',
		platform: {
			name: os.type(),
			version: os.release(),
		},
	},
})