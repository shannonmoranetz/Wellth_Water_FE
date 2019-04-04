import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-userpane',
  templateUrl: './userpane.component.html',
  styleUrls: ['./userpane.component.scss']
})
export class UserpaneComponent implements OnInit {
  users = USERS;
  
  constructor() { }

  ngOnInit() {
  }

}
