import { provideEnvironmentInitializer } from '@angular/core';

// The older way to add providers: export the array itself. The cover lights a dot for it too.
export default [
  provideEnvironmentInitializer(() => void (document.documentElement.dataset['providers'] = 'yes')),
];
