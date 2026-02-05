main()
function main()
{

  g = generate_num(824824821,824824827)
  s = 'hello'
  let S = new Sequence(g[0])

  S.showStats()


  for (var i = 0; i < g.length; i++)
  {
    console.log(find_match(g[i]))
  }

  //console.log(generate_num(11, 22))
}

function find_match(id)
{
  if(id[0] == 0)
    return 0

  n = id.length
  i = 0
  k = 0
  match = ''

  while(i < n)
    {
      i++
      k++

    }
    return false
}

function genNum(n)
{
  k = n
  t = []
  while(k >= 1)
  {
    r = k % 10
    k = k / 10
    t.unshift(Math.floor(r))
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

function find_term(number, m, n){

  if(m > n)
    return 0

  term = 0
  while(m < number.length && m <= n)
  {
      if(number[m] == 0)
          break

      term += number[m];
      m++
  }

  return term
}
