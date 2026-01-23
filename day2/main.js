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

class seq{

}


function WOP(list){

}

function seq_func(number){
  return number;
}

function find_term(number, m = 0, n){

  term = 0
  while(m < number.length && m < n)
  {
    console.log(number[m])
    term += number[m++];

  }

  return term
}


function main(k)
{

  aList = [1,2,3,1,2,3]
  n = aList.length

  i = 0
  k = 1

  sum = 0
  match = 0
  g = 1;
  t = ''
  while(i < n, k < n){

    match = find_term(aList, i , k) * Math.floor(n / (n - k))
    q = find_term(aList, k, n)
    t += aList[i]

    console.log(t, i++, k++,)
    console.log(match, q, match == q, match < q, match > q)
  }

  posList = []
  pList = []
  bList = []






  console.log(aList, pList,posList, bList)

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
