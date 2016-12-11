import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { Register } from './register-component/register.component';
import { RegisterForm } from './register-component/register-form/register.form';
import { Stars } from './ui/stars/stars';

@NgModule({
  declarations: [
    AppComponent,
    Register,
    RegisterForm,
    Stars
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      { path: 'register', component: Register }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
