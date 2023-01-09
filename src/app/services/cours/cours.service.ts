import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';
import { Cours } from 'src/app/class/cours';
import { RechercheService } from 'src/app/interfaces/recherche-service';
import { DataService } from '../data/data.service';

const LIST_COURS = 'list_cours';

@Injectable({
  providedIn: 'root',
})
export class CoursService implements RechercheService<Cours> {
  list: Cours[] = [];

  constructor(private api: DataService<Cours>) {
    api.setUrl(Cours.name)
    this.setlist();
  }

  getList() {
    return this.list;
  }
  async setlist() {
    this.list = await this.api.get().toPromise()
  }
  add(target: Cours) {
    this.list.push(target);
    this.save(target);
  }
  findBy(field, valeur) {
    return this.list.filter((el) => el[field].includes(valeur));
  }
  async save(target?:Cours) {
    console.log(target);
    
    await this.api.post(target)
  }
  delete(cous: Cours) {
    this.list = this.list.filter((ele: Cours) => !cous.isEqual(ele));
    this.save();
  }
}
