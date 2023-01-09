import { Entity } from '../interfaces/entity';

export class Cours extends Entity<Cours> {
  id?: number;
  public constructor(
    public nomCours: string,
    public nbrEleve: number,
    public nomProf: string,
    public professeurId?: number,
    id?: number
  ) {
    super(id);
  }

  public getnomCous(): string {
    return this.nomCours;
  }
  new(el: Cours) {
    return new Cours(el.nomCours, el.nbrEleve, el.nomProf, el.professeurId);
  }
}
