main()
function main()
{
  max = 7;
  t = generate_num(11111,66666)

  console.log(t)

}

function modMe(n, m){
  return ((( n % m) + m) % m);
}

function genNum(n)
{
  k = n
  t = []
  while(k >= 1)
  {
    r = k % 10
    k = k / 10
    t.unshift(modMe(Math.floor(r), 7))
  }
  return t;
}

function generate_num(i, t)
{

  k = 0;
  numbers = []
  while(i <= t)
  {
    numbers.push(genNum(i++))
  }
  return numbers
}
