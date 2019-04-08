import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { sumTotal } from '../sumtotal';

@Component({
  selector: 'app-userpane',
  templateUrl: './userpane.component.html',
  styleUrls: ['./userpane.component.scss']
})
export class UserpaneComponent implements OnInit {
  public userName: any;
  public userId: number;
  public show = false;
  public price: number;
  public drinktype: string;
  public allEntriesTotal: any;
  public USD;

  constructor(private _entryService: EntryService) { }

  ngOnInit() {
    this._entryService.getUserEntries().subscribe(
      (response)=>{
        this.userName = response.name;
        this.userId = response.id;
    })
    this._entryService.getAllEntries().subscribe(
      (response)=>{
        this.allEntriesTotal = sumTotal(response);
    });
  }

  toggleShowForm() {
    this.show = !this.show;
  }

  submitEntryForm(){
    this._entryService.postEntry(this.userId, this.drinktype, this.price*100).subscribe();
    this.toggleShowForm();
  }

}
