## Technology

- [Java Script](https://learn.javascript.ru/)
- [Cypress](https://docs.cypress.io/guides/overview/why-cypress)
- [Cucumber](https://cucumber.io/docs/installation/javascript/)
- [Visual Studio Code](https://code.visualstudio.com/)



## Steps to run

- Clone the repository using "git clone "

- npm install


## Run test

- You can open cypress ui and run your test there

npx cypress open

- If you want to run tests in a specific browser in the headless mode (chrome/edge/electron/firefox)

cypress run --browser chrome

## Html-report

# Installation

npm i -D @shelex/cypress-allure-plugin

# Setup

- (After Cypress 10) Use defineConfig and setupNodeEvents inside config.js\config.ts files:

const AllureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            AllureWriter(on, config);
            return config;
        }
    }
});

- Register commands in cypress/support/index.js (or cypress/support/e2e.js for cypress 10+) file:

with import:
import '@shelex/cypress-allure-plugin';
with require:
require('@shelex/cypress-allure-plugin');