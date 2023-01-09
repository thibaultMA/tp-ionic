import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
    {
      path: 'home',
      component: HomePage,
      children: [
        {
          path: 'profs',
          loadChildren: () => import('../profs/profs/profs.module').then(m => m.ProfsPageModule)
        },{
          path: 'cours',
          loadChildren: () => import('../cours/tabs/tabs.module').then(m => m.TabsPageModule)
        },{
          path: '',
          redirectTo: '/home/profs',
          pathMatch: 'full'
        }
      ]
    },
    {
      path: '',
      redirectTo: '/home/profs',
      pathMatch: 'full'
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
