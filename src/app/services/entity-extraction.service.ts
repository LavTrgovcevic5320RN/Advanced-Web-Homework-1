import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { EntityExtraction } from "../models/entity-extraction";

@Injectable({
  providedIn: 'root'
})
export class EntityExtractionService {
  private readonly entityExtractionAPI = environment.entityExtractionApi;

  constructor(private httpClient: HttpClient) { }

  getEntityExtractions(text: string, minConfidence: number, args: string[]): Observable<EntityExtraction> {
    let url: string = this.entityExtractionAPI + '?text=' + text + "&min_confidence=" + minConfidence;

    if(args.length > 0){
      url += "&include="
      while(args.length > 1){
        url += args.pop() + ",";
      }
      url += args.pop();
    }

    url += "&token=" + localStorage.getItem("token");

    return this.httpClient.get<EntityExtraction>(url);

  }
}
