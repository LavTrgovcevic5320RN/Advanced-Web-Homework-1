import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfigurationComponent } from './components/configuration/configuration.component';
import { EntityExtractionComponent } from './components/entity-extraction/entity-extraction.component';
import { TextSimilarityComponent } from './components/text-similarity/text-similarity.component';
import { LanguageDetectionComponent } from './components/language-detection/language-detection.component';
import { SentimentAnalysisComponent } from './components/sentiment-analysis/sentiment-analysis.component';
import { HistoryComponent } from './components/history/history.component'
import {TokenGuard} from "./token.guard";

const routes: Routes = [
  {
    path: "configuration",
    component: ConfigurationComponent,
  },
  {
    path: "",
    component: EntityExtractionComponent,
    canActivate: [TokenGuard],
  },
  {
    path: "entity-extraction",
    component: EntityExtractionComponent,
    canActivate: [TokenGuard],
  },
  {
    path: "text-similarity",
    component: TextSimilarityComponent,
    canActivate: [TokenGuard],
  },
  {
    path: "language-detection",
    component: LanguageDetectionComponent,
    canActivate: [TokenGuard],
  },
  {
    path: "sentiment-analysis",
    component: SentimentAnalysisComponent,
    canActivate: [TokenGuard],
  },
  {
    path: "history",
    component: HistoryComponent,
    canActivate: [TokenGuard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
