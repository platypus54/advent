main()
function main()
{
  max = 7;
  t = generate_num(11111,66666)
  k = pairDiceRollToPoints(t)
  console.log(t)

  ones = findOnes(k);
  twos = findSetsThatContainAValue(k, 2)
  sixes = findSetsThatContainAValue(k, 6)

  console.log(ones)
  console.log(twos)
  console.log(sixes)
}

function modMe(n, m)
{
  return ((( n % m) + m) % m);
}

function genNum(n)
{
  k = n
  t = []
  while(k >= 1)
  {
    r = Math.floor(k % 10)

    if(r >= 7 || r == 0)
      return []

    k = k / 10
    t.unshift(modMe(r, 7))
  }

  return t;
}

function generate_num(i, t)
{
  k = 0;
  numbers = []
  while(i <= t)
  {
    s = genNum(i++)
    if(s.length > 0)
      numbers.push(s)
  }
  return numbers
}

function calculatePoints(diceList)
{
  m = 0
  for (var i = 0; i < diceList.length; i++)
  {
    m += diceList[i];
  }

  return m;
}

function pairDiceRollToPoints(dList){
  t = []
  for (var i = 0; i < dList.length; i++)
  {
      t.push(new Pair(dList[i], calculatePoints(dList[i])))
  }
  return t
}

function findOnes(dList){
  ones = []
  for (var i = 0; i < dList.length; i++)
  {
    if(dList[i].item1[i] == 1)
      ones.push(dList[i])
    else
    {
      for(var j = 1; j < dList[i].item1.length; j++)
        if(dList[i].item1[j] == 1)
        {
          ones.push(dList[i])
          break
        }
     }
  }
  return ones
}

function findSetsThatContainAValue(dList,n){
  t = []
  for (var i = 0; i < dList.length; i++)
  {
    if(dList[i].item1[i] == n)
      t.push(dList[i])
    else
    {
      for(var j = 1; j < dList[i].item1.length; j++)
        if(dList[i].item1[j] == n)
        {
          t.push(dList[i])
          break
        }
     }
  }
  return t
}

function generateLowerCateggory(dList){
  t = []

  for (var i = 0; i < dList.length; i++) {
    t[i] = findSetsThatContainAValue(dList,i + 1)
  }

  return t;

}
