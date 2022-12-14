const { defineConfig } = require("cypress");

module.exports = defineConfig({
   defaultCommandTimeout: 8000, 
  
  
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config)
    },
    excludeSpecPattern: '*.js',
    specPattern: 'cypress/e2e/Features/*.{feature,features}',
  },
});
