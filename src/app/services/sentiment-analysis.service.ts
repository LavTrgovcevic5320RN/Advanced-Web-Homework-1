import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { SentimentAnalysis } from "../models/sentiment-analysis";
import { environment } from "../environments/environment";
import { HistoryService } from "../services/history.service";

@Injectable({
  providedIn: 'root'
})
export class SentimentAnalysisService {

  private readonly sentimentAnalysisAPI = environment.sentimentAnalysisApi;

  constructor(private httpClient: HttpClient, private historyService: HistoryService) { }

  getAnalysis(text: string, lang: string): Observable<SentimentAnalysis>{
    let url: string = this.sentimentAnalysisAPI + "/?lang=" + lang + "&text=" + text + "&token=" + localStorage.getItem("token");

    this.historyService.addHistory(url, new Date());
    return this.httpClient.get<SentimentAnalysis>(url);
  }
}
