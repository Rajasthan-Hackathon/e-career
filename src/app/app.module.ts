import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, PreloadAllModules } from '@angular/router'


import { AppComponent } from './app.component';

import { ROUTES } from './app.routes'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, {
      useHash: true,
      preloadingStrategy: PreloadAllModules
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
