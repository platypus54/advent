let nList = ['111','123123123']


main()

function main(){

    let sequenceLeft = String();
    let positionLeftSequence = 0;

    let sequenceRight = String();
    let positionRightSequence = 0;

    let pSequence = String();
    let partitions = 0;
    let sequence_size = 0;

    let id = nList[1];
    let idSize = nList[1].length

    sequenceLeft += id[positionLeftSequence];

    while(positionLeftSequence < idSize){

        let sequenceLeftSize = sequenceLeft.length;
        positionRightSequence = positionLeftSequence + 1;

          while(positionRightSequence < idSize)
          {
            sequenceRight += id[positionRightSequence++];
            console.log(sequenceRight)
          }

          console.log(sequenceLeft, " | ", sequenceRight)

          partitions = Math.floor( sequenceRight.length / sequenceLeftSize )

          positionRightSequence  = 0

          k = 0
          while(k < partitions)
          {
              while(sequence_size < sequenceLeftSize)
              {
                pSequence += sequenceRight[positionRightSequence]
                sequence_size++
                positionRightSequence++
              }
              console.log(pSequence,'\tpartitions: ', k)

              pSequence = String()

              sequence_size = 0
              k++
          }
          
        positionLeftSequence++
        sequenceLeft += id[positionLeftSequence]
        sequenceRight = String()
    }
}
