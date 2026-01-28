let strnList = ['101','123123123']

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


function main(k)
{

  aList = [1,2,3,1,2,3]
  n = aList.length
  lSubs = []
  rSubs = []

  i = 0
  k = 0
  m = 0

  match = 0
  t = ''

  //console.log(find_term(aList,0, n))
  while(i < n)
  {
    sizeLeft = i + m
    sizeRight = n - k
    a = find_term(aList, 0, i + m)
    b = find_term(aList, k + 1, n)

    p = ( (n - k) - 1 )  / ( (i + m) + 1)

    if(p >= 1 && p * a == b){
      console.log("MATCH")
      console.log(p,sizeLeft, sizeRight, a, b)
    }
    i++
    k++
  }
  console.log(p)

}


function g(strNumber)
{

  if(!strNumber )
    return false;

  let idSize = strNumber.length;

  if(idSize == 1)
    return true

  n = idSize - 1 // size decreases
  x = 1; // how many groups - increases (right side)
  i = 0
  sl = ''

  let perms = []
  while(Math.floor(n-- / x++) > 0)
  {
    perms.push( Math.floor(n / x))
  }

  sizeofRightPositions = []
  sizeofLeftPositions = []

  i = 0;

  while(i < idSize)
  {

    sizeofLeftPositions.push(strNumber[i]);

    if(i + 1 < idSize)
      sizeofRightPositions.push(strNumber[i + 1]);

    i++
  }



  console.log(perms)
  console.log(sizeofLeftPositions, sizeofRightPositions)
}
