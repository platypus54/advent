let CLICKS_TO_RADIANS = (Math.PI / 50);
let TWO_PI = 2 * Math.PI

class Combination {

  constructor(direction, n) {
    if(direction == 'L')
      this.isLeft = true;
    else if (direction == 'R')
      this.isRight = true;

    this.clicks = n;
    this.radians = CLICKS_TO_RADIANS * n;
  }

}

class Dial
{

  constructor()
  {
    this.start_position = Math.PI; // the starting position of the dial
    this.position = 0; // the position of the dial as we apply rotations
    this.rotation_counter = 0; // counter to track the number of rotations we make
    this.safe_password = 0; // counter to track how many times we land on zero
  }

  move(combo)
  {
    for (var i = 0; i < combo.length; i++) {

      // need to update - think mod
      if(combo[i].isLeft)
        this.position -= combo[i].radians;

      else if (combo[i].isRight) {
        this.position += combo[i].radians;
      }
      else
        console.log("not a proper ")

        console.log(this.position)

        if(this.position == 0)
          this.safe_password++;

        this.rotation_counter++;
    }
  }

    print_summay()
    {
       console.log(this.safe_password , this.rotation_counter);
    }

}
