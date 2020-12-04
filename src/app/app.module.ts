import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import localEs from '@angular/common/locales/es' //lang example
import localFr from '@angular/common/locales/fr';
import { CapitalizedPipe } from './pipes/capitalized.pipe';
import { DomsecurePipe } from './pipes/domsecure.pipe';
import { PasswordPipe } from './pipes/password.pipe' //lang example
import { registerLocaleData } from '@angular/common';

registerLocaleData(localEs); //lang example
registerLocaleData(localFr); //lang example

@NgModule({
  declarations: [
    AppComponent,
    CapitalizedPipe,
    DomsecurePipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { //lang example
      provide: LOCALE_ID, //lang example
      useValue:'en' //lang example
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
