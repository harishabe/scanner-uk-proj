import { Component, OnInit } from '@angular/core';
import { Icons } from './../../config/icon.config';
import { Message } from './../../config/message.en';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  expandToggle: Boolean = true;
  constructor(public icon:Icons,private MESSAGE:Message) { }

  ngOnInit() {
  }

  expand() {
    this.expandToggle = !this.expandToggle;
  }
}
