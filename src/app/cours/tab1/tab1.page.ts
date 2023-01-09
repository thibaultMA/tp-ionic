import { Component } from '@angular/core';

import { NavController } from '@ionic/angular';
import { Entity } from 'src/app/interfaces/entity';
import { Cours } from '../../class/cours';
import { CoursService } from '../../services/cours/cours.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  formCourDTO: any = {};
  

  constructor(
    private courService: CoursService,
    private navCTRL: NavController
  ) {}
  logform() {
    let newCour:Cours =  new Cours(
      this.formCourDTO.nomCours,
      this.formCourDTO.nbrEleve,
      this.formCourDTO.nomProf,
      this.formCourDTO.professeurId
      );
    if (newCour.isNotEmpty()) {
      this.courService.add(newCour);
      this.navCTRL.navigateRoot('home/cours/list');
      this.formCourDTO={};
    }
  }
}
