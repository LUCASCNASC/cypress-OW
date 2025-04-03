/* eslint-disale no unused-vars */
/* eslint-disale no unudef */

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: "cypress-qase-reporter",
    reporterOptions: {
    apiToken: "7ab24d080750d929a22473885887a24e41c05086f09205481ad9797c591582bf",
    projectCode: "OW",
    runComplete: true,
    logging: true,
    uploadAttachments: true
  },
   baseUrl: 'http://confidencial.com/',
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
