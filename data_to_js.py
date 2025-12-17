import re
if __name__ == '__main__':

    combinations = []

    with open("/../combinations.txt") as lines:
        for line in lines:

            n1 = re.split(r'(L|R)',line,1)

            t = re.split(r'(\n)',n1[2],1)

            n1[2] = t[0]

            n1.pop(0)

            combinations.append(n1)

    LAST_ITEM_OF_LIST = combinations.pop()

    with open("/../combinations.js","w") as doc:

        doc.write("const combinations = [\n")

        for combo in combinations:
            doc.write(f"['{combo[0]}' , {combo[1]}],\n")

        doc.write(f"['{LAST_ITEM_OF_LIST[0]}',{LAST_ITEM_OF_LIST[1]}]\n")
        doc.write("]")

