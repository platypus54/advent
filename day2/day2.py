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
    sum = 0
    validIDs = []
    invalidIDs = []

    #could clean this up.. len(y) * len(x) * ?(possible 'in')
    for x in r:
        print(x)

        for y in x:
            print(y)
            n = len(y)
            # even or odd- that is the question
            if n % 2 == 0:
               
                # [minl,maxl)  and [minr, maxr) ; let n be the length of the string 
                minl = 0
                maxl = int(n / 2) 
                
                minr = int(n / 2)
                maxr = n
                
                print(y[minl:maxl], " =  ", y[minr:maxr])

                if y[minl:maxl] == y[minr:maxr]:
                    invalidIDs.append(y)
                    sum += int(y)
                else:
                    validIDs.append(y)
            else:
                validIDs.append(y)

        print(f'Sum of invalid IDs: {sum} \n InvalidIDs:{invalidIDs} \n ValidIDs:{validIDs} \n')
