console.log(cList[0])

test1 = [ ['L' , '3'],['R','39'],['R','45'],['R', '43']]
test2 = [ ['R', '5'], ['L', '5'] ]
test3 = [ ['R', '5'], ['L', '5'],['L', '1']]
test4 = [ ['R', '5'], ['L', '5'],['L', '1'], ['R','50']]



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
    "\starting number:\t", this.D,
    "\ndivisor:\t", this.d,
    "\nquotient:\t", this.f,
    "\ndividend:\t" ,this.D ,
    "\nfactors * divisor:\t", this.f * this.d ,
    "\nremainder:\t", this.r,
    "\nfactors * divisor + remainder:\t", this.f * this.d + this.r,
    "\n" + this.D + " =  " + this.f + " * " + this.d + " + " + this.r)

    }
}



function main(t){
  let combinations = new Array();

  for (var i = 0; i < t.length ; i++){
      combinations.push(data_to_combination(t[i]))
      jDRevision(Number(t[i][1]),100)
  }

  console.log(combinations)
  //let dial = new Dial();

  //dial.move(combinations);

  //dial.print_summay();
}

function data_to_combination(data_item){
  let direction = String(data_item[0]);
  let clicks = Number(data_item[1]);
  return new Combination(direction,clicks);
}

modFun()

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

function jMod(n, m)
{
  return ((( n % m) + m) % m);
}


function jDivision(n,divisor)
{
    let quotient = 0
    let dividend = n;
    let remainder = 0;

    if(dividend > 0 && dividend < 1)
      return "no floats on this boat"
    if(divisor == 0)
      return "bad"


    else if ( dividend > 0 )
    {
        while(dividend > divisor && dividend > 0)
        {
          dividend -= divisor;
          quotient++
        }
    }
    else if (dividend < 0)
    {
      while(dividend < divisor && dividend < 0)
        {
          dividend += divisor;
          quotient++
        }

        quotient *= -1
    }

      remainder = dividend;

    let meta = new Info(n,divisor,quotient, remainder);
    meta.toString()

}

function jDRevision(a, b)
{
  let remainder = 0;
  let quotient = 0;
  let dividend = a;
  let divisor = b;


  if(divisor == 0)
    return "division by 0"

  if ( dividend > 0 )
  {
      while(dividend > divisor)
      {
        dividend -= divisor;
        quotient++
      }
  }
  else if (dividend < 0)
  {
      while(dividend < divisor)
      {
          dividend += divisor;
          quotient++
      }
         quotient *= -1
   }

      remainder = dividend;

  let meta = new Info(a,divisor,quotient,remainder);
  meta.toString();

}








main(cList);
