const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '123',
  ciBuildId: '234',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
