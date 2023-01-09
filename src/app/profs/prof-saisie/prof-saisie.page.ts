import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Prof } from 'src/app/class/prof';
import { ProfPhoto } from 'src/app/interfaces/prof-photo';
import { PhotoService } from 'src/app/services/photo/photo.service';
import { ProfService } from 'src/app/services/prof/prof.service';

@Component({
  selector: 'app-prof-saisie',
  templateUrl: './prof-saisie.page.html',
  styleUrls: ['./prof-saisie.page.scss'],
})
export class ProfSaisiePage implements OnInit {
  constructor(
    public profService: ProfService,
    public photoService: PhotoService,
    private navCTRL: NavController
  ) {}

  prof: Prof = this.restartProf();

  ngOnInit() {
  }

  private restartProf(){
    return new Prof(null, null, null,new ProfPhoto(null,null));
  }

  async ajoutPhoto() {
    this.prof.setPhoto(await this.photoService.addNewToGallery());
   
  }
  async ajoutProf() {

    if (this.prof.isNotEmpty()) {

      await this.profService.add(
        new Prof(
          this.prof.nom,
          this.prof.prenom,
          this.prof.age,
          this.prof.photo
        )
      );
      this.prof = this.restartProf()
      this.navCTRL.navigateRoot('home/profs/prof-list');
      
    } 
  }
}
