import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEntry } from './entry';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class EntryService {

  private _url: string = 'https://cors-anywhere.herokuapp.com/http://wellth-water.herokuapp.com/api/v1/users/1/entries'

  constructor(private http: HttpClient) { }

  getEntries(): Observable<IEntry[]>{
    return this.http.get<IEntry[]>(this._url)
  }

}
