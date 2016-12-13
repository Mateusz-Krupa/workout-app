import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Stars } from './stars/stars';
import { MainMenu } from './main-menu/main.menu';

@NgModule({
  declarations: [
    Stars,
    MainMenu
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [MainMenu, Stars]
})
export class UiModule { }
