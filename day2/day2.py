

if __name__ == '__main__':

    r1 = (95, 115)
    numbers = []
    invalidIDs = []

    min = r1[0]
    max = r1[1]

    n = min
    j = 0
    while (n <= max):
        numbers.insert(j,str(n))
        n+=1
        j+=1

    print(numbers)

    counter = 0
    validIDs = []
    invalidIDs = []
    for x in numbers:

        n = len(x)
        if n % 2 == 0:
            minl = 0
            maxl = int(n / 2)
            minr = int(n / 2)
            maxr = n

            print(x[minl:maxl], " =  ", x[minr:maxr], " -  ", int(n / 2))

            if x[minl:maxl] in x[minr:maxr]:
                invalidIDs.append(x)
                counter += 1;
        else:
            validIDs.append(x)

    print(counter)
    print(invalidIDs)
