import { defineConfig } from 'cypress';

export default defineConfig({
  component: {
    devServer: {
      framework: 'react',
      bundler: 'webpack',
    },
    specPattern: ['tests/unit/**/*.cy.ts', 'tests/unit/**/*.cy.tsx'],
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ['tests/e2e/**/*.cy.ts'],
  },
});
