let strnList = [ [1,2,3], [0,1,2], [1,1,0,1,0], [1,1,1] ]

class Pair{

  constructor(x, y){
    this._item1 = Number(x);
    this._item2 = Number(y);
  }

  get item1(){return this._item1;};
  get item2(){return this._item2;};

  fromPair(pair_to_copy){
    this.item1  = pair_to_copy._item1;
    this.item2 = pair_to_copy._item1;
  }

  ToString(){
    console.log("\n( " + this._item1 + "," + this._item2 + ")")
  }
}



main(strnList)


function find_term(number, m = 0, n){

  if(m > n)
    return 0

  term = 0
  while(m < number.length && m <= n)
  {
    term += number[m];
    m++
  }

  return term
}

function find_match(id){
  if(id[0] == 0)
    return 0

  n = id.length
  i = 0
  k = 0
  m = 0
  match = ''

  while(i < n)
    {
      match += id[i]
      sizeLeft = i + m
      sizeRight = n - k
      a = find_term(id, 0, i + m)
      b = find_term(id, k + 1, n)

      p = ( (n - k) - 1 )  / ( (i + m) + 1)
      r = ( (n - k) - 1 )  % ( (i + m) + 1)

      console.log(p,sizeLeft, sizeRight, a, b)

      if(p - r > 1 && p * a == b){
        console.log("MATCH")
        console.log(match,p,sizeLeft, sizeRight, a, b)
      }
      i++
      k++
    }
    console.log(p)
}

function main(k)
{

  for (var i = 0; i < k.length; i++) {
    find_match(k[i])
  }

}
