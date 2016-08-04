import { bootstrap } from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent, environment } from './app/';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  disableDeprecatedForms(), // disable deprecated forms
  provideForms(), // enable new forms module 
])
.catch((err: any) => console.error(err));
