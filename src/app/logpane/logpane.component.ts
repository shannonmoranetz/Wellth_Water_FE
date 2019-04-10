import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { sumTotal } from '../sumtotal';

@Component({
  selector: 'app-logpane',
  templateUrl: './logpane.component.html',
  styleUrls: ['./logpane.component.scss']
})
export class LogpaneComponent implements OnInit {
  public userEntries: [];
  public userTotal = 0;
  public USD;

  constructor(private _entryService: EntryService) { }

  ngOnInit() {
    this._entryService.getUserEntries().subscribe(
      (response)=>{
        this.userEntries = response.entries;
        this.userTotal = sumTotal(response.entries);
    })
  }

}
