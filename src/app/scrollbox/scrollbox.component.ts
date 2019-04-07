import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-scrollbox',
  templateUrl: './scrollbox.component.html',
  styleUrls: ['./scrollbox.component.scss']
})
export class ScrollboxComponent implements OnInit {
  public userEntries: {};

  constructor(private _entryService: EntryService) { }

  ngOnInit() {
    this._entryService.getEntries().subscribe(
      (response)=>{
        this.userEntries = response.entries;
    });
  }

}
