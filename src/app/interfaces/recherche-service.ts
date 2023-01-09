export interface RechercheService<target> {
  list: target[];
  getList();
  setlist();
  add(target: target);
  findBy(field, valeur);
  save(target?);
  delete(target: target);
}
