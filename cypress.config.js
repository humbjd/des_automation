const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://aprendendotestar.com.br/treinar-automacao.php',
    viewportHeight: 1080,
    viewportWidth: 1920,
    retries: {
      runMode: 0,
      openMode: 0,
    },
    video: false,

    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
  },
});
