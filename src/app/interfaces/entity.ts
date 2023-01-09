
export abstract class Entity<target> {
  constructor(public id?: number) {}

  setId(id: number) {
    this.id = id;
  }

  getId() {
    return this.id;
  }
  empty
  isEqual(cible: target) {
    const even = (element) => element % 2 == 0;
    return !Object.getOwnPropertyNames(cible)
      .map((el) => cible[el] == this[el])
      .some(even);
  }
  isNotEmpty() {
    return Object.getOwnPropertyNames(this).every((value) => {
      if (value == 'id' && this[value] === undefined) {
        return true;
      } else if (value == 'photo') {
        return this[value].isNotEmpty();
      }  else if (this[value]) {
        return true;
      } else {
        return false;
      }
    });
  }
}
