import re

if __name__ == '__main__':
    ranges = []
    with open("/../day2TestData.txt") as lines:
        for line in lines:
            n1 = re.split(r',', line)
            print(n1)
            for item in n1
                n2 = re.split(r'-', n1, 1)
            min = int(n2[0])
                max = int(n2[1])

            n = min
            j = 0
            temp = []
            while (n <= max):
                temp.insert(j,str(n))
                n+=1
                j+=1
            ranges.append(temp)

    print(ranges)
    counter = 0
    validIDs = []
    invalidIDs = []
    for x in ranges:
        for y in x:
            n = len(y)
            if n % 2 == 0:

                minl = 0
                maxl = int(n / 2)
                minr = int(n / 2)
                maxr = n
                print(y[minl:maxl], " =  ", y[minr:maxr])
                if y[minl:maxl] in y[minr:maxr]:
                    invalidIDs.append(y)
                    counter += 1;
            else:
                validIDs.append(y)

    print(counter == 1227775554)
    print(invalidIDs)
