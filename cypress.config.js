/* eslint-disale no unused-vars */
/* eslint-disale no unudef */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   baseUrl: 'http://10.7.0.42:2401/',
    setupNodeEvents(on, config) {
      //; implement node event listeners here
    },
    defaultCommandTimeout: 20000,
    screenshotOnRunFailure: false, // Captura de screenshot somente quando o teste falhar
    screenshotsFolder: 'cypress/screenshots', // Diretório onde as screenshots serão salvas
    video: false, //Gravar vídeo do teste
    videosFolder: 'cypress/videos' // Diretório onde os vídeos serão salvos
  },
});
