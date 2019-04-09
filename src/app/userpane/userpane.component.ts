import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';
import { sumTotal } from '../sumtotal';
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-userpane',
  templateUrl: './userpane.component.html',
  styleUrls: ['./userpane.component.scss'],
})
export class UserpaneComponent implements OnInit {
  public userName: any;
  public userId: number;
  public showLogForm = false;
  public showDonateForm = false;
  public showButtons = true;
  public showDonatePrompt = false;
  public price: number;
  public drinktype: string;
  public allEntriesTotal: any;
  public barWidth: any;
  public faTint = faTint;
  public faDollarSign = faDollarSign;
  public faArrowLeft = faArrowLeft;
  public faCheck = faCheck;
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
          this.showDonateForm = true;
          this.showDonatePrompt = true;
          this.showButtons = false;
        }
    });
  }

  toggleLogForm() {
    this.showButtons = false;
    this.showLogForm = !this.showLogForm;
  }

  toggleDonateForm() {
    this.showButtons = false;
    this.showDonateForm = !this.showDonateForm;
  }

  submitEntryForm() {
    this._entryService.postEntry(this.userId, this.drinktype, this.price*100).subscribe();
    this.showLogForm = !this.showLogForm;
    this.showButtons = true;
  }

  goBack() {
    this.showLogForm = false;
    this.showDonateForm = false;
    this.showButtons = true;
  }
}
