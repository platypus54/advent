
let CLICKS_TO_RADIANS = (Math.PI / 50);
let TWO_PI = 2 * Math.PI


class Pair{
  constructor(x, y){
    this.direction = x;
    this.click = y;
  }

  get direction(){
    return this._direction;
  }

  set direction(x){
    this._direction = x;
  }

  get click(){
    return this._click;
  }

  set click(x){
    this._click = x;
  }



}


class Combination {

  constructor(direction, n) {
    if(direction == 'L')
      this.isLeft = true;
    else if (direction == 'R')
      this.isRight = true;

    this.clicks = n;
    this.radians = CLICKS_TO_RADIANS * n;


}

class Dial {

  constructor() {
    this.start_position = Math.PI; // the starting position of the dial
    this.position = 0; // the position of the dial as we apply rotations
    this.rotation_counter = 0; // counter to track the number of rotations we make
    this.safe_password = 0; // counter to track how many times we land on zero
  }

  Move(combo){
      if(combo.isLeft)
        this.position -= combo.radians;
      else if (combo.isRight) {
        this.position += combo.radians;
      }
      else
        console.log("not a proper ")

      if(combo.position == 0)
        this.safe_password++;

      this.rotation_counter++;

  }

}
