import re

if __name__ == '__main__':
    r = []

    with open("/../day2TestData.txt") as lines:
        for line in lines:
            n1 = re.split(r',', line)
            min = 0
            max = 0
            for item in n1:
                n2 = re.split(r'-', item, 1)
                #print(n2)
                min = int(n2[0])
                max = int(n2[1])

                temp = []
                while (min <= max):
                    temp.append(str(min))
                    min+=1

                #print(temp)
                r.append(temp)

    #print(r)
    sum_invalidIDs = 0
    validIDs = []
    invalidIDs = []

    for x in r:
        #print(x)

        for y in x:
            #print(y)
            n = len(y)

            for i in range(0, n - 1):
                minl = 0
                maxl = i + 1
                minr = i + 1
                maxr = n

                if y[minl:maxl] == y[minr:maxr]:
                    invalidIDs.append(y)
                    sum_invalidIDs += int(y)
                    print(y[minl:maxl], " =  ", y[minr:maxr])
                else:
                    validIDs.append(y)



    print(f'Sum of invalid IDs: {sum_invalidIDs} \n InvalidIDs:{invalidIDs} \n ValidIDs:{len(validIDs)} \n')
