import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfListPage } from './prof-list.page';

const routes: Routes = [
  {
    path: '',
    component: ProfListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfListPageRoutingModule {}
