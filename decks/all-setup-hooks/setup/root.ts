import { inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// Root: runs once in the app's injection context. It keeps the current address on <html data-path>,
// and the deck's CSS shows it as a small label in the corner.
export default () => {
  const router = inject(Router);
  router.events.subscribe((e) => {
    if (e instanceof NavigationEnd) document.documentElement.dataset['path'] = router.url.split('?')[0];
  });
};
