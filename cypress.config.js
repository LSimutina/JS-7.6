const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000/",
    retries:0
  },
  env: {
    viewportWidth: 360,
    viewportWidth: 640,
  },
});
