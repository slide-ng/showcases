import { provideEnvironmentInitializer } from '@angular/core';

// Marks the page with the issue number, so styles/index.css can give each issue its own accent colour.
export default () => [
  provideEnvironmentInitializer(() => {
    document.documentElement.dataset['zine'] = 'issue-3';
  }),
];
