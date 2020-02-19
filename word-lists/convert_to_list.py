import os

with open(r'long_list.txt') as file:
    data = file.read().split('\n')
    print(data)
