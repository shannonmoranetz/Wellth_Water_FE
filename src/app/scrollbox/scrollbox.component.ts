import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
// import { ENTRIES } from '../mock-entries';

@Component({
  selector: 'app-scrollbox',
  templateUrl: './scrollbox.component.html',
  styleUrls: ['./scrollbox.component.scss']
})
export class ScrollboxComponent implements OnInit {
  public entries = [];

  constructor(private _entryService: EntryService) { }

  ngOnInit() {
    this._entryService.getEntries()
      .subscribe(data => this.entries = data);
  }

}
