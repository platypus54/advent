let TWO_PI = 2 * Math.PI;
let CLICKS_TO_RADIANS = ( TWO_PI / 100);


class Combination {

  constructor(direction, n) {
    if(direction == 'L')
      this.isLeft = true;
    else if (direction == 'R')
      this.isRight = true;

    this.clicks = n;
  }
}

class Dial
{

  constructor()
  {
    this.start_position = 50; // the starting position of the dial
    this.position = 0; // the position of the dial as we apply rotations
    this.rotation_counter = 0; // counter to track the number of rotations we make
    this.safe_password = 0; // counter to track how many times we land on zero
  }


  move(combo)
  {
    this.position = this.start_position;


    for (var i = 0; i < combo.length; i++) {

      if(combo[i].isLeft)
        tp = (this.position - combo[i].clicks);
      else if (combo[i].isRight)
        tp = (this.position + combo[i].clicks);


      if(tp < 0)
          this.position = (tp + 100);
      else
          this.position = tp % 100;

      // error
      if(this.position == 0)
        {this.safe_password++;}

      this.rotation_counter++;

      //console.log(this.position , this.rotation_counter, combo[i].clicks);
  }

  moveRevision(){
    
  }
  
}
    print_summay()
    {
       console.log(this.safe_password , this.rotation_counter);
    }
 }
