console.log(cList[0])

test1 = [ ['L' , '3'],['R','39'],['R','45'],['R', '43']]
test2 = [ ['R', '5'], ['L', '5'] ]
test3 = [ ['R', '5'], ['L', '5'],['L', '1']]
test4 = [ ['R', '5'], ['L', '5'],['L', '1'], ['R','50']]

//main(cList);


function main(t){
  let combinations = new Array();

  for (var i = 0; i < t.length ; i++)
      combinations.push(data_to_combination(t[i]))

  console.log(combinations)
  let dial = new Dial();

  dial.move(combinations);

  dial.print_summay();
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
    let factors = 0, dividend = n;
    let remainder = 0;

    if(dividend > 0 && dividend < 1)
      return "no floats on this boat"
    if(divisor == 0)
      return "bad"
    if(Math.abs(n) < divisor)
      return "we are only whole at the moment"

    if (dividend == divisor)
    {
        remainder = 0;
        factors = 1;
    }
    else if ( dividend > 0 )
    {
        while(dividend > divisor && dividend > 0)
        {
          dividend -= divisor;
          factors++
        }
    }
    else if (dividend < 0)
    {
      while(dividend < divisor && dividend < 0)
        {
          dividend += divisor;
          factors++
        }
    }
        remainder = dividend;

  console.log(
  "\starting number:\t", n,
  "\nfactors:\t", factors,
  "\ndividend:\t" ,n ,
  "\nfactors * divisor:\t", factors * divisor ,
  "\nremainder:\t", remainder,
  "\nfactors * divisor + remainder:\t", factors * divisor + remainder)


}
