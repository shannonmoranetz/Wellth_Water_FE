import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-userpane',
  templateUrl: './userpane.component.html',
  styleUrls: ['./userpane.component.scss']
})
export class UserpaneComponent implements OnInit {
  public userName: any;

  constructor(private _entryService: EntryService) { }

  ngOnInit() {
    this._entryService.getUserEntries().subscribe(
      (response)=>{
        this.userName = response.name;
    });
  }

}
