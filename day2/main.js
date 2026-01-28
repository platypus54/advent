let strnList = [ [1,2,3], [0,1,2], [1,1,0,1,0], [1,1,1], [5,3,7,9], [2,1,3,2,1], [9,9,9,9] ]

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
      xL = i + m
      xR = n - k
      a = find_term(id, 0, xL)
      b = find_term(id, k + 1, n)
      p = ( (xR) - 1 )  / ( (xL) + 1)
      r = ( (xR) - 1 )  % ( (xL) + 1)

      //console.log(p,xL, xR, a, b)

      if(b > 0 && p * a == b){
        console.log("MATCH")
        console.log(match,p,xL, xR, a, b)
        break
      }
      i++
      k++
    }
}

function main(k)
{

  for (var i = 0; i < k.length; i++) {
    find_match(k[i])
  }

}
