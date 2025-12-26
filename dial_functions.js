
class Combination {
  constructor(direction, n){
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
  move(combo){
    this.position = this.start_position;

    for (var i = 0; i < combo.length; i++){

      let a = 0;
      if(combo[i].isLeft)
        a = combo[i].clicks * -1;
      else
        a = combo[i].clicks;

      let nPair = jDivision(a , 100)

      this.safe_password += nPair.item1

      let n = 0;
      while(n++ < Math.abs(nPair.item2)){
        if(a < 0)
          this.position = jMod(this.position - 1, 100)
        else
          this.position = jMod(this.position + 1, 100)

          if(this.position == 0)
            this.safe_password++;
      }
   }
    return this.safe_password;
 }

  print_summay(){
     console.log(this.safe_password , this.rotation_counter);
  }


}
