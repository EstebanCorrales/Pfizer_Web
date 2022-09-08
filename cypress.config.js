const { defineConfig } = require('cypress')

module.exports = defineConfig({
  reporter: 'junit',
  reporterOptions: {
    mochaFile: 'results/my-test-output-[hash].xml'
  }, 
  "video": false,
   e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

})
