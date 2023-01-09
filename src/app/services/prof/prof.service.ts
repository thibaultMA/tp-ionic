import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Prof } from 'src/app/class/prof';
import { RechercheService } from 'src/app/interfaces/recherche-service';
import { DataService } from '../data/data.service';
import { PhotoService } from '../photo/photo.service';

const LIST_PROF = 'list_prof';

@Injectable({
  providedIn: 'root',
})
export class ProfService implements RechercheService<Prof> {
  list: Prof[] = [];
  currentProf: Prof;
  constructor(private photoService: PhotoService, private api: DataService<Prof>) {
    api.setUrl("Prof")
    this.setlist();
  }
  getList() {
    return this.setlist();
  }
  async setlist() {
    this.list = await this.api.get().toPromise()
    
    return this.list ;
  }
  async add(target: Prof) {
    this.list.unshift(target);
    await this.save(target);
  }
  findBy(field: any, valeur: any) {
    return this.list.filter((el) => el[field].includes(valeur));
  }
  async save(target?:Prof) {
    await this.photoService.savePicture(target.photo);
    // await this.api.post(target)
  }
  delete(cous: Prof) {
    this.list = this.list.filter((ele: Prof) => !cous.isEqual(ele));
    this.save();
  }
  log() {
    console.log(this.list);
  }
}
