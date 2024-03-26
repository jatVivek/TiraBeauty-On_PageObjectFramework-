const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'qkh6xx',
  e2e: {
    // Configure your E2E tests here
    specPattern: "cypress/e2e/example/*.js"
  },
})