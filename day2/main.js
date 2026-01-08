let nList = ['101','123123123']
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




main()



function main(){
  let id = nList[0];
  let idSize = nList[0].length;

  console.log(id)
  console.log(idSize)

  n = idSize // size decreases
  x = 0; // how many groups - increases (right side)

  while( n-- / x++ > 0)
  {
    console.log('groups',x, 'residuals', n % x, 'partitions', Math.floor(n / x) )

      if(n % x > 0)
        break

      i = 0
      r = 0
      pos = 0

      sl = ''
      sr = ''
      while(i < idSize)
      {
          sl += id[i++]

          size = 0
          j = 0
          while(j++ < idSize && size++ < x)
            sr += id[j++]
            console.log('SEQL:', sl )
      }

  }

  function gP(seq, start, end)
  {

  }

  console.log(get_matches(id))
  console.log(get_sequences(id))

  console.log(generate_partitions(get_matches(id), get_sequences(id)))

}


function generate_partitions(matches, sequences){
  p = []
  for (var i = 0; i < sequences.length - 1; i++) {

    partitions = Math.floor( sequences[i + 1].length / matches[i].length)
    residual = sequences[ i + 1 ].length - partitions * matches[i].length

      p[i] = new Pair(partitions,residual)
  }
  return p
}


function get_matches(str){
  matches = []
  seq = ''
  for (var i = 0, n = 0; i < str.length - 1; i++) {
      seq += str[i]
      matches[i] = seq
  }
  return matches
}


function get_sequences(str){
  sequences = [ ]

  for (var i = 1; i < str.length; i++) {

      for(var n = 0; n < str.length; n++)
        seq += str[i]

    sequences[i - 1] = seq
  }

  return sequences
}



//--------//

function k(){

    let sequenceLeft = String();
    let positionLeftSequence = 0;

    let sequenceRight = String();
    let positionRightSequence = 0;

    let pSequence = String();
    let partitions = 0;
    let sequence_size = 0;

    let id = nList[0];
    let idSize = nList[0].length

    sequenceLeft += id[positionLeftSequence];

    while(positionLeftSequence < idSize){
        console.log("A:PLSEQ", positionLeftSequence, "PLREQ", positionRightSequence)

        let sequenceLeftSize = sequenceLeft.length;
        positionRightSequence = positionLeftSequence + 1

        console.log("B:PLSEQ", positionLeftSequence, "PLREQ ", positionRightSequence)

          while(positionRightSequence < idSize )
          {
            sequenceRight += id[positionRightSequence++];
            //console.log(sequenceRight)
            console.log("C:RSEQ ", sequenceRight, "PLREQ ", positionRightSequence)
          }

          console.log(sequenceLeft, " | ", sequenceRight)

          partitions = Math.floor( sequenceRight.length / sequenceLeftSize )

          positionRightSequence  = 0

          k = 0
          match = 1;

          while(k < partitions)
          {
              console.log("D: PARTITION ", k, "PRSEQ", positionRightSequence)

              while(sequence_size < sequenceLeftSize)
              {
                console.log("E: SEQS ", sequence_size , "PRSEQ", positionRightSequence)
                console.log(sequenceRight[positionRightSequence])

                pSequence += sequenceRight[positionRightSequence]

                console.log(pSequence)

                sequence_size++
                positionRightSequence++
              }
              console.log("partition:", pSequence,'\tpartitions: ', k)



              if(sequenceLeft === pSequence){
                  match++;
                  console.log(sequenceLeft, " == ", pSequence)
              }

              pSequence = String()
              sequence_size = 0
              k++

          }

          if(match > 1)
              console.log("INVALID ID")

        positionLeftSequence++

        sequenceLeft += id[positionLeftSequence]

        sequenceRight = String()
    }
}
