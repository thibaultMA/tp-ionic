import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfsPage } from './profs.page';

const routes: Routes = [
  {
    path: '',
    component: ProfsPage,
    children:[
      {
        path: '',
        redirectTo:'prof-saisie',
        pathMatch: 'full'
      },
      {
        path: 'prof-recherche',
        loadChildren: () => import('../prof-recherche/prof-recherche.module').then( m => m.ProfRecherchePageModule)
      },
      {
        path: 'prof-list',
        loadChildren: () => import('../prof-list/prof-list.module').then( m => m.ProfListPageModule)
      },
      {
        path: 'prof-saisie',
        loadChildren: () => import('../prof-saisie/prof-saisie.module').then( m => m.ProfSaisiePageModule)
      }
    ]
  },{
    path: '',
    redirectTo:'prof-saisie',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfsPageRoutingModule {}
