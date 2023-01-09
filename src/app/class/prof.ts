import { Entity } from '../interfaces/entity';
import { ProfPhoto } from '../interfaces/prof-photo';

export class Prof extends Entity<Prof> {
  constructor(
    public nom: string,
    public prenom: string,
    public age: number,
    public photo?: ProfPhoto,
    id?: number
  ) {
    super(id);
  }

  static DTO(object: Prof) {
    return new Prof(object.nom, object.prenom, object.age, object.photo);
  }
  setPhoto(photo: ProfPhoto) {
    this.photo = photo;
  }
  toString() {
    return `{nom:${this.nom}
      prenom:${this.prenom}
      age:${this.age}
      photoId:${this.photo}}`;
  }
}
