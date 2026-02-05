class Pair{

  constructor(x, y)
  {
    this._item1 = Number(x);
    this._item2 = Number(y);
  }

  get item1(){return this._item1;};
  get item2(){return this._item2;};

  fromPair(pair_to_copy)
  {
    this.item1  = pair_to_copy._item1;
    this.item2 = pair_to_copy._item1;
  }

  ToString(){
    console.log("\n( " + this._item1 + "," + this._item2 + ")")
  }
}
