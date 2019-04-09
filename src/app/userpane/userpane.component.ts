import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { sumTotal } from '../sumtotal';
import { faTint } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userpane',
  templateUrl: './userpane.component.html',
  styleUrls: ['./userpane.component.scss'],
})
export class UserpaneComponent implements OnInit {
  public userName: any;
  public userId: number;
  public show = false;
  public showDonate = false;
  public showDonatePrompt = false;
  public price: number;
  public drinktype: string;
  public allEntriesTotal: any;
  public barWidth: any;
  public faTint = faTint;
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
        this.barWidth = Math.floor((this.allEntriesTotal / 3000));
        if (this.barWidth > 100) {
          this.barWidth = 100;
        }
        if(this.barWidth > 100) {
          this.showDonate = true;
          this.showDonatePrompt = true;
        }
    });
  }

  toggleShowForm() {
    this.showDonate = false;
    this.show = !this.show;
  }

  toggleDonateForm() {
    if(this.show) {
      this.show = false;
    }
    this.showDonate = !this.showDonate;
  }

  submitEntryForm(){
    this._entryService.postEntry(this.userId, this.drinktype, this.price*100).subscribe();
    this.toggleShowForm();
  }

}
