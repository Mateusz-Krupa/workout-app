import { Component } from '@angular/core';

@Component({
  selector: "register-form",
  templateUrl: "register.form.html",
  styleUrls: ["register.form.sass"]
})
export class RegisterForm {

  public user;
  constructor() {
    this.user={
      email: 'ewelina.dziewiela@gmail.com',
      firstname: 'Ewelina',
      lastname: "Dziewiela",
      city: 'Warszawa',
      tel: '500286502',
      stars: '10'
    }

  }
}
