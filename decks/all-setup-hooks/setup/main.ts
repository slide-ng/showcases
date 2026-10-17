import { provideEnvironmentInitializer } from '@angular/core';

// Main: Angular providers for the whole app. This one marks the page when the app starts; the cover lights a dot for it.
export default () => [
  provideEnvironmentInitializer(() => void (document.documentElement.dataset['main'] = 'yes')),
];
