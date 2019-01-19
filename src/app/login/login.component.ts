import { Component, OnInit } from '@angular/core';
import { Icons } from './../config/icon.config';
import { Message } from './../config/message.en';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  showProgressBar = false;
  wmsLoginObj = { "username": '', "password": '' };
  constructor(private icon: Icons,private MESSAGE:Message, private router: Router) { }

  ngOnInit() {
  }

  /**
   * @name login
   * @desc login function
  */

  login() {
    this.showProgressBar = true;
    if (this.wmsLoginObj.username === 'ocr' && this.wmsLoginObj.password === 'ocr') {
      this.showProgressBar = true;
      this.router.navigate(['/dashboard/scanner']);
    } else {
      this.showProgressBar = false;
    }
  }

}
