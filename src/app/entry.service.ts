import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserEntry } from './userEntry';
import { IEntry } from './entry';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private _url: string = 'https://cors-anywhere.herokuapp.com/http://wellth-water.herokuapp.com/api/v1/users/8/entries'

  constructor(private http: HttpClient) { }

  getUserEntries(): Observable<IUserEntry>{
    return this.http.get<IUserEntry>(this._url)
  }

  postEntry(price:number): Observable<IEntry> {
    let _entryUrl = `https://cors-anywhere.herokuapp.com/http://wellth-water.herokuapp.com/api/v1/entries/8/tea/${price}/`
    return this.http.post<IEntry>(_entryUrl, {})
  }

}
