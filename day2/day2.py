

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

    str_num = numbers[16] # 11
    str_num_length = len(str_num)

    counter = 0
    digit = 0
    current_digit = ''
    cursor = 0

    print("number",str_num, "length", str_num_length)

    for x in numbers:
        n = len(x)
        if n % 2 == 0:

            minl = 0
            maxl = int(n / 2)
            minr = int(n / 2)
            maxr = n

            print(x[minl:maxl], " =  ", x[minr:maxr], " -  ", int(n / 2))

            if x[minl:maxl] in x[minr:maxr]:
                counter += 1;
        else:
            print("validID",x )



    print(counter)
