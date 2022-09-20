import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Test1Component} from "./test1/test1.component";
import { CreatedAuto1Component } from './created-auto1/created-auto1.component';
import { CreatedAuto2Component } from './created-auto2/created-auto2.component';
import { Test4Component } from './user/components/test4/test4.component';
import { Test5Component } from './user/components/test5/test5.component';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,
    CreatedAuto1Component,
    CreatedAuto2Component,
    Test4Component,
    Test5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
