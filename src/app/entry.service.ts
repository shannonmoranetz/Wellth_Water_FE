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
  private _entryUrl: string = 'https://cors-anywhere.herokuapp.com/http://wellth-water.herokuapp.com/api/v1/entries/8/soda/150/'

  constructor(private http: HttpClient) { }

  getUserEntries(): Observable<IUserEntry>{
    return this.http.get<IUserEntry>(this._url)
  }

  postEntry(): Observable<IEntry> {
    return this.http.post<IEntry>(this._entryUrl, {})
  }

}
