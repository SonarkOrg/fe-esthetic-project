import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module'; // Adjust the path as needed
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
//import { environment } from './environments/environment';

/*if (environment.production) {
  enableProdMode();
}
*/

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));



