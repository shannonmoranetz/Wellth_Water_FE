import { Component, OnInit } from '@angular/core';
import { sumTotal } from '../sumtotal';

@Component({
  selector: 'app-logpane',
  templateUrl: './logpane.component.html',
  styleUrls: ['./logpane.component.scss']
})
export class LogpaneComponent implements OnInit {
  userTotal = 0;

  constructor() { }

  ngOnInit() {
    this.userTotal = sumTotal();
  }

}
