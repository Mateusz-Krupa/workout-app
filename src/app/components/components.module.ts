import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from './home-page/home.page';
import { Register } from './register/register.component';
import { RegisterForm } from './register/register-form/register.form'
import { ProfileList } from './profile-list/profile.list'
import { UiModule } from '../ui/ui.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Profile } from './profile-list/profile/profile';


@NgModule({
  declarations: [
    HomePage,
    Register,
    ProfileList,
    RegisterForm,
    Profile
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UiModule
  ],
  providers: [],
  exports: [HomePage, Register, ProfileList]
})

export class ComponentsModule {}
