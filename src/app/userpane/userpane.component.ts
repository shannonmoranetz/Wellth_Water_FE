import { Component, OnInit } from '@angular/core';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-userpane',
  templateUrl: './userpane.component.html',
  styleUrls: ['./userpane.component.scss']
})
export class UserpaneComponent implements OnInit {
  public userName: any;
  public show = false;
  public price: number;

  constructor(private _entryService: EntryService) { }

  ngOnInit() {
    this._entryService.getUserEntries().subscribe(
      (response)=>{
        this.userName = response.name;
    });
  }

  toggleShowForm() {
    this.show = !this.show;
  }

  submitEntryForm(){
    this._entryService.postEntry(this.price).subscribe(
      (data:any)=>{
        console.log(data)
      }
    );
  }

}
