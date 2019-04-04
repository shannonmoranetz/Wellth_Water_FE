import { Component, OnInit } from '@angular/core';
import { ENTRIES } from '../mock-entries';

@Component({
  selector: 'app-scrollbox',
  templateUrl: './scrollbox.component.html',
  styleUrls: ['./scrollbox.component.scss']
})
export class ScrollboxComponent implements OnInit {
  entries = ENTRIES;

  constructor() { }

  ngOnInit() {
  }

}
