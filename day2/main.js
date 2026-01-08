let nList = ['101','123123123']

main()

function main()
{
    g('101')
}

function g(strNumber)
{

  if(!strNumber)
    return false;

  let id = strNumber;
  let idSize = strNumber.length;

  if(idSize == 1)
    return true

  console.log(id)
  console.log(idSize)

  n = idSize // size decreases
  x = 1; // how many groups - increases (right side)
  i = 0
  sl = ''
  sr = ''

  while(n / x > 0 && n > x)
  {
      p = Math.floor( n / x )
      r = n - p * x
      console.log('size', n, 'groups',x, 'residuals', r, 'partitions', p )


      sl += id[i]
      size = 0
      j = i + 1
      k = p * n * x
      y = 0

      console.log(p,k)
      while(p > 0 && j < k )
      {
          if( size < x )
          {
            sr += id[j++]
            size++
          }
          else
          {
            console.log('SEQ:', sl ,'==', sr)


              sr = String()
              p--
              size = 0
          }
        }

      console.log(p)

      if(p == 0 && y >= 1)
        return true

      i++;  n--;  x++;
  }

  return false;
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


function k()
{
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
