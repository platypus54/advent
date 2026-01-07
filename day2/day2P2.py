import re
import math

def findMatchingSequence(g):
    sequenceLeft = str()
    positionLeftSequence = 0
    sequenceRight = str()
    positionRightSequence = 0

    pSequence = str()
    partitions = 0
    sequence_size = 0
    id = g
    idSize = len(g)

    sequenceLeft += id[positionLeftSequence]
    while (positionLeftSequence < idSize - 1):

        sequenceLeftSize = len(sequenceLeft)
        positionRightSequence = positionLeftSequence + 1

        while positionRightSequence < idSize:
            sequenceRight += id[positionRightSequence]
            positionRightSequence += 1

        print(sequenceLeft, " | ", sequenceRight)

        partitions = math.floor(len(sequenceRight) / sequenceLeftSize)
        residual = len(sequenceRight) - partitions * sequenceLeftSize

        positionRightSequence = 0

        k = 0
        repeated = 0
        while (k < partitions):

            while sequence_size < sequenceLeftSize:

                pSequence += sequenceRight[positionRightSequence]
                sequence_size += 1
                positionRightSequence += 1

                #print(pSequence, '\tpartitions: ', k)

            if sequenceLeft == pSequence:
                print(sequenceLeft, " == ", pSequence)
                repeated += 1

            pSequence = str()
            sequence_size = 0
            k += 1

        if repeated >= 1 and repeated == partitions:

            if(residual == 0):
                return True

        positionLeftSequence += 1
        sequenceLeft += id[positionLeftSequence]

        sequenceRight = str()

    return False


if __name__ == '__main__':

    r = []
    sum_invalidIDs = 0
    validIDs = []
    invalidIDs = []

    with open(".../t2.txt") as lines:
        for line in lines:
            n1 = re.split(r',', line)

            for item in n1:
                n2 = re.split(r'-', item, 1)

                min_id = int(n2[0])
                max_id = int(n2[1])

                while min_id <= max_id:
                    print("NUMBER\t\t",min_id)
                    id = str(min_id)
                    if findMatchingSequence(id):
                        sum_invalidIDs += int(id)
                        invalidIDs.append(id)
                    else:
                        validIDs.append(id)

                    min_id += 1


print("sum", sum_invalidIDs, "invalid_IDs:\n" , invalidIDs)
