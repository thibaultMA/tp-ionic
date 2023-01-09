import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfRecherchePage } from './prof-recherche.page';

const routes: Routes = [
  {
    path: '',
    component: ProfRecherchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfRecherchePageRoutingModule {}
