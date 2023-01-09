import {
  Component,
  DoCheck,
  EventEmitter,
  Output,
  ViewEncapsulation,
} from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Cours } from '../../class/cours';
import { CoursService } from '../../services/cours/cours.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class Tab2Page implements DoCheck {
  public coursList: Cours[];
  public columns: any;
  @Output() event = new EventEmitter<any>();

  constructor(public courService: CoursService, public alert: AlertController) {
    this.columns = [
      {
        name: 'nomCours',
      },
      {
        name: 'nbrEleve',
      },
      {
        name: 'nomProf',
      },
    ];
  }
  ngDoCheck(): void {
    // this.getDatas();
  }
  ionViewWillLeave() {
    // this.getDatas();
  }
  ionViewWillEnter() {
    this.getDatas();
  }
  ionViewDidLeave() {
    // console.log("destroy");
    // this.coursList = undefined
  }

  getDatas() {
    this.coursList = [...this.courService.getList()];
    console.log();
    
  }
  logData() {
    console.log(this.coursList);
  }
  async supprime(e) {
    let row = e.path.filter((el) => el.nodeName == 'DATATABLE-ROW-WRAPPER')[0];
    let spans = row.querySelectorAll('span');

    let cour = new Cours(spans[0].title, spans[1].title, spans[2].title);

    this.courService.delete(cour);
    this.ionViewWillEnter();
  }
  async demandeSuppression(e) {
    const message_popup = 'Etes-vous sûr(e) de vouloir supprimer ce cours ?';
    let popup = await this.alert.create({
      header: 'confirmation',
      message: message_popup,
      buttons: [
        {
          text: 'non',

          cssClass: 'bouton_cancel',
        },
        {
          text: 'oui',
          cssClass: 'bouton_confirm',
          handler: () => {
            return this.supprime(e);
          },
        },
      ],
    });

    await popup.present();
    await popup.onDidDismiss();
  }
}
