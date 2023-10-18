import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ConfigurationComponent} from "./components/configuration/configuration.component";
import {EntityExtractionComponent} from "./components/entity-extraction/entity-extraction.component";
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
