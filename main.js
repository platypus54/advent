console.log(cList[0])

test1 = [ ['L' , '3'],['R','39'],['R','45'],['R', '43']]
test2 = [ ['R', '5'], ['L', '5'] ]
test3 = [ ['R', '5'], ['L', '5'],['L', '1']]
test4 = [ ['R', '5'], ['L', '5'],['L', '1'], ['R','50']]


class Pair{
  constructor(x, y){
    this.first = x;
    this.second = y;
  }

  ToString(){
    console.log("\n( " + this.first + "," + this.second + ")")
  }
}


class Info {
  constructor(a,b,c,d)
  {
    this.D = a;
    this.d = b;
    this.f = c;
    this.r = d;
  }

  toString(){
    console.log(
    "\a:\t", this.D,
    "\ndivisor:\t", this.d,
    "\nquotient:\t", this.f,
    "\ndividend:\t" ,this.D ,
    "\nquotient * divisor:\t", this.f * this.d ,
    "\nremainder:\t", this.r,
    "\nfactors * divisor + remainder:\t", this.f * this.d + this.r,
    "\n" + this.D + " =  " + this.f + " * " + this.d + " + " + this.r)

    }
}

function main(t){
  let combinations = new Array();

   for (var i = 0; i < t.length ; i++)
   {
      combinations.push(data_to_combination(t[i]))
      console.log(jDivision(Number(t[i][1]),100))
   }

  //let dial = new Dial();

  //dial.move(combinations);

  //dial.print_summay();
}

function data_to_combination(data_item){
  let direction = String(data_item[0]);
  let clicks = Number(data_item[1]);
  return new Combination(direction,clicks);
}
function modFun(){

  let a = -12;
  let b = 502;

  console.log(a % 100) // remainder
  console.log(   ((( a % 100) + 100) % 100) )
  console.log(a / 100)  // factor

  jDivision(15098,100)
  jDivision(100,100)
  jDivision(-12,2)
  jDivision(-100,100)
  jDivision(-13,100)
  jDivision(100, 0)
  jDivision(.2, 99)


}
function jMod(n, m){
  return ((( n % m) + m) % m);
}
function jDivision(a, b){
    let quotient = 0;
    let dividend = a;
    let divisor = b

    if(divisor == 0)
      return -0
    else if(divisor < 0)
      return -0

    while(dividend >= divisor)
    {
      dividend -= divisor;
      ++quotient
    }

    let remainder = a - (quotient * b);

    return ( new Pair(quotient, remainder) );
}


function adventClicks(a, b)
{
    let quotient = 0;
    let dividend = a;
    let divisor = b

    if(divisor == 0)
      return -0
    else if(divisor < 0)
      return -0

    while(dividend >= divisor)
    {
      dividend -= divisor;
      ++quotient
    }

    let remainder = a - (quotient * b);

    return ( new Pair(quotient, remainder) );
}

















main(cList);
