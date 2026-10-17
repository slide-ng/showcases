import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeDe);
registerLocaleData(localeFr);

export default () => [{ provide: LOCALE_ID, useValue: 'de-DE' }];
