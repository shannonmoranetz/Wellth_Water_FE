import { Component, OnInit } from '@angular/core';
import { Entry } from '../Entry';
import { ENTRIES } from '../mock-entries';

@Component({
  selector: 'app-scrollbox',
  templateUrl: './scrollbox.component.html',
  styleUrls: ['./scrollbox.component.scss']
})
export class ScrollboxComponent implements OnInit {
  entries = ENTRIES;

  entry: Entry = {
    drink: 'coffee',
    price: 350
  };

  constructor() { }

  ngOnInit() {
  }

}
