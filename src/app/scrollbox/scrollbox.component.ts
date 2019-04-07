import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { sumTotal } from '../sumtotal';

@Component({
  selector: 'app-scrollbox',
  templateUrl: './scrollbox.component.html',
  styleUrls: ['./scrollbox.component.scss']
})
export class ScrollboxComponent implements OnInit {
  public userEntries: {};
  public userTotal = 0;
  public USD;

  constructor(private _entryService: EntryService) { }

  ngOnInit() {
    this._entryService.getEntries().subscribe(
      (response)=>{
        this.userEntries = response.entries;
        this.userTotal = sumTotal(response.entries);
    });
  }

}
