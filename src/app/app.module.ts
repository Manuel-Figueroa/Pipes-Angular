import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

//configuracion del local app
import localEsMX from "@angular/common/locales/es-MX";
import localFrCA from "@angular/common/locales/fr-CA";
import {registerLocaleData} from '@angular/common';
registerLocaleData(localEsMX);
registerLocaleData(localFrCA);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide:LOCALE_ID,useValue:'es-MX'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
