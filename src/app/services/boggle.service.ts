import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {BoggleBox} from '../bogglebox'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class BoggleService {

  private apiUrl = 'https://localhost:44345/api/boggle/getbogglebox';
  private apiUrlValidWord = 'https://localhost:44345/api/boggle/isvalidword';
  private apiUrlCheckScore = 'https://localhost:44345/api/boggle/scoreword';

  constructor(private http:HttpClient) { }
  
  getBoggleBox(): Observable<BoggleBox> {
    return this.http.get<BoggleBox>(this.apiUrl);
  } 

  checkValidWord(boggleBoxID: string, word: string): Promise<boolean>{
    return this.http.get<boolean>(this.apiUrlValidWord +`/${boggleBoxID}/${word}`).toPromise();
  }

  checkScore(word: string): Promise<number> {
    return this.http.get<number>(this.apiUrlCheckScore +`/${word}`).toPromise();
  }
}
