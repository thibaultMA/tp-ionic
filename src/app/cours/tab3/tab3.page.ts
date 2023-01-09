import { Component } from '@angular/core';
import { Cours } from '../../class/cours';
import { CoursService } from '../../services/cours/cours.service';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  rechercheCourrante = undefined;
  val;
  rechercheList: Cours[] = [];

  constructor(public courService: CoursService) {}

  ionViewWillEnter() {

  }

  handleChange(ev) {
    this.rechercheCourrante = ev.target.value;
  }

  find() {
    if (this.val && this.rechercheCourrante != null) {
        this.rechercheList = this.courService.findBy(
        this.rechercheCourrante,
        this.val
      );
    } else {
      this.rechercheList = [];
    }
  }
}
