#old code to reference for regex

import re

def add_lists(list1=list, list2=list):
    for x in list2:
        list1.append(x)

def group_lines(lines=list) -> list:

    grouped_lines = []
    string_line = str()

    for line in lines:
        if line != '\n':
            string_line += line
        else:
            grouped_lines.append(string_line)
            string_line = str()
    return grouped_lines

def clean_line_1(lines=list) -> tuple:
    numbers_list = []
    names = []

    for line in lines:
        n1 = re.split(r'[:\n]', line)
        names.append(n1.pop(0))
        t = [x for x in n1 if x != '']
        numbers_list.append(t)

    return names,numbers_list

def build_almanac(names=list,numbers=list) -> dict:
    temp = []
    almanac = {}
    name_counter = 0

    for num_str in numbers:

        for item in num_str:
            n2 = re.split(r' ', item)
            t = [x for x in n2 if x != '']
            temp.append(t)

        almanac[names[name_counter]] = temp
        name_counter += 1
        temp = []

    return almanac
