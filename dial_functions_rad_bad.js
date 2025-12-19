// can get pretty close to answer - floating point precision? %? 
// need more exploring with % -> could be leading to errorneous output


let TWO_PI = 2 * Math.PI;
let CLICKS_TO_RADIANS = ( TWO_PI / 100);


class Combination {

  constructor(direction, n) {
    if(direction == 'L')
      this.isLeft = true;
    else if (direction == 'R')
      this.isRight = true;

    this.clicks = n % 100; // remainder
    //this.angle = (CLICKS_TO_RADIANS * this.clicks);
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

      let tp = 0;

      if(combo[i].isLeft)
      {
        tp = (this.position - combo[i].clicks);
      }
      else if (combo[i].isRight){
        tp = (this.position + combo[i].clicks);
      }


      if(tp < 0)
          this.position = (tp + 100);
      else
          this.position = tp % 100;

      // error
      if(this.position >= 0 && this.position < .001)
        {this.safe_password++;
            console.log(this.position, Math.round(this.position))
        }

      this.rotation_counter++;

      //console.log(this.position , this.rotation_counter, combo[i].clicks);
  }
}
    print_summay()
    {
       console.log(this.safe_password , this.rotation_counter);
    }
 }
