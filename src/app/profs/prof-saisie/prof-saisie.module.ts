import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfSaisiePageRoutingModule } from './prof-saisie-routing.module';

import { ProfSaisiePage } from './prof-saisie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfSaisiePageRoutingModule
  ],
  declarations: [ProfSaisiePage]
})
export class ProfSaisiePageModule {}
