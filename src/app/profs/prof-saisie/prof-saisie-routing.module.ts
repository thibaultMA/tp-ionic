import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfSaisiePage } from './prof-saisie.page';

const routes: Routes = [
  {
    path: '',
    component: ProfSaisiePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfSaisiePageRoutingModule {}
