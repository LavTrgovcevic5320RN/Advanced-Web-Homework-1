import { Injectable } from '@angular/core';
import { History } from '../models/history'

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  private history: History[] = []

  constructor() { }

  addHistory(url: string, date: Date){
    this.history.push(new History(url, date));
  }

  getHistory(): History[]{
    return this.history;
  }

}
