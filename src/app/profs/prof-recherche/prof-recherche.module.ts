import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfRecherchePageRoutingModule } from './prof-recherche-routing.module';

import { ProfRecherchePage } from './prof-recherche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfRecherchePageRoutingModule
  ],
  declarations: [ProfRecherchePage]
})
export class ProfRecherchePageModule {}
