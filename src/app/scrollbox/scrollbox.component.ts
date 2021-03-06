import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { faTint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scrollbox',
  templateUrl: './scrollbox.component.html',
  styleUrls: ['./scrollbox.component.scss']
})
export class ScrollboxComponent implements OnInit {
  public userEntries: any;
  public faTint = faTint;
  constructor(private _entryService: EntryService) { }

  ngOnInit() {
    this._entryService.getUserEntries().subscribe(
      (response)=>{
        this.userEntries = response.entries;
    });
    this._entryService.cast.subscribe(entryUpdateData => this.userEntries = entryUpdateData);
  }
}
