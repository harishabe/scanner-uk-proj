import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { AppComponent } from './app.component';
import { LazyloadingModule } from './lazy-loading/lazy-loading'
import { LayoutModule } from '@angular/cdk/layout';
import { HttpModule } from '@angular/http';

import { FlexLayoutModule } from '@angular/flex-layout';

import { Icons } from './config/icon.config';
import { Message } from './config/message.en';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LazyloadingModule,
    LayoutModule,
    FlexLayoutModule,
    HttpModule
  ],
  providers:[Icons,Message],
  bootstrap: [AppComponent]
})
export class AppModule { }
