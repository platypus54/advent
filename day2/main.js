main()
function main()
{
  max = 7;
  t = generate_num(11111,66666)
  k = pairDiceRollToPoints(t)
  lower_category = genLC(k)
  threesKind = genUPC(k)

  console.log(lower_category,'\n',threesKind)
}

function modMe(n, m)
{
  return ((( n % m) + m) % m);
}

function genNum(n)
{
  let k = n
  let t = []
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
  let k = 0;
  let numbers = []
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
  let m = 0
  for (var i = 0; i < diceList.length; i++)
  {
    m += diceList[i];
  }

  return m;
}

function pairDiceRollToPoints(dList){
  let t = []
  for (var i = 0; i < dList.length; i++)
  {
      t.push(new Pair(dList[i], calculatePoints(dList[i])))
  }
  return t
}

function findSetsThatContainAValue(dList,n){
  let t = []
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

function genLC(dList){
  let t = []
  for (var i = 1; i < 7; i++) {
    t.push(findSetsThatContainAValue(dList,i))
  }
  return t;
}

function genMatches(dList,m){
  let t = []
  let k = 1;
  let match = 0;
  for (var i = 0; i < dList.length; i++)
  {
    for(var j = 0; j < dList[i].length; j++){

      for(var f = 0; f < dList[i][j].item1.length && match < m; f++)
      {
        if(dList[i][j].item1[f] == k)
        {
          match++;
        }
      }
        if(match == m)
          t.push(dList[i][j])
        match = 0

    }
        k++
  }
  return t
}

function genMatches2(dList,m){
  let t = []
  let k = 1;
  let match = 0;
  for (var i = 0; i < 7; i++)
  {
    for(var j = 0; j < dList.length && match < m; j++)
    {
        if(dList[j] == k)
        {
          match++;
        }
    }
        if(match == m)
          t.push(dList)

        match = 0

        k++
    }

  return t
}

function genUPC(dList){
  let t = []
  matches = [3,4,5]
  for (var i = 0; i < matches.length; i++)
  {
    g = []
    for(var j = 0; j < dList.length; j++)
    {
      console.log(dList[j])
      s = genMatches2(dList[j].item1,matches[i])
      if(s.length > 0)
        g.push(s)
    }
    t.push(g)
  }
  return t
}
