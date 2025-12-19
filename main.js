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
  jDivision(5,2)

}

function jMod(n, m)
{
  return ((( n % m) + m) % m);
}

function jDivision(n,m)
{
  let factors = 0, t = n;

  if(n < m)
    return

  while(t > m)
  {
    t -= m;
    factors++
  }

  let remainder = t;

  console.log(factors, n, factors * m , remainder, factors * m + remainder)


}
