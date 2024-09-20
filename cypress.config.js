const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://d28dp6fycxce58.cloudfront.net/",
    viewportHeight: 938,
    viewportWidth: 1528,
    defaultCommandTimeout: 3000,
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});