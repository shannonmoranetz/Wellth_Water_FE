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

  onNameKeyUp(event:any){
    this.price = event.target.value;
  }

  submitEntryForm(){
    console.log('fire')
    this._entryService.postEntry().subscribe(
      (data:any)=>{
        console.log(data)
    });
  }



}
