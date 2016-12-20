import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UiModule } from './ui/ui.module';
import { ComponentsModule } from './components/components.module'
import { Register } from './components/register/register.component'
import { HomePage } from './components/home-page/home.page'
import { ProfileList} from './components/profile-list/profile.list'

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UiModule,
    ComponentsModule,
    RouterModule.forRoot([
      { path: 'register', component: Register },
      { path: '', component: HomePage },
      { path: 'profile-list', component: ProfileList }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
