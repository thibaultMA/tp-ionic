import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfListPageRoutingModule } from './prof-list-routing.module';

import { ProfListPage } from './prof-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfListPageRoutingModule
  ],
  declarations: [ProfListPage]
})
export class ProfListPageModule {}
