# Biggie Size - Given a list, write a function that changes all positive numbers in the list to "big".
# Example: biggie_size([-1, 3, 5, -5]) returns that same list, but whose values are now[-1, "big", "big", -5]

def biggieSize(list):
    for x in range(len(list)):
        if list[x] > 0:
            list[x] = "big"
    return list
myList = [-1, 3, 5, -5]
# biggieSize(myList)


# Count Positives - Given a list of numbers, create a function to replace the last value with the number of positive values. (Note that zero is not considered to be a positive number).
# Example: count_positives([-1, 1, 1, 1]) changes the original list to[-1, 1, 1, 3] and returns it
# Example: count_positives([1, 6, -4, -2, -7, -2]) changes the list to[1, 6, -4, -2, -7, 2] and returns it

def countPositives(list):
    count = 0
    for x in range(len(list)):
        if list[x] > 0:
            count += 1
    list[(len(list) - 1)] = count
    return list
myList = [-1, 1, 1, 3]
# countPositives(myList)


# Sum Total - Create a function that takes a list and returns the sum of all the values in the list.
# Example: sum_total([1, 2, 3, 4]) should return 10
# Example: sum_total([6, 3, -2]) should return 7

def sumTotal(list):
    sum = 0
    for x in range(len(list)):
        sum += list[x]
    return sum
myList = [1,2,3,4]
# total = sumTotal(myList)


# Average - Create a function that takes a list and returns the average of all the values.x
# Example: average([1, 2, 3, 4]) should return 2.5

def average(list):
    sum = 0
    for x in range(len(list)):
        sum += list[x]
    avg = sum / len(list)
    return avg
myList = [1,2,3,4]
# ave = average(myList)


# Length - Create a function that takes a list and returns the length of the list.
# Example: length([37, 2, 1, -9]) should return 4
# Example: length([]) should return 0

def length(list):
    return len(list)
myList = []
# listLength = length(myList)


# Minimum - Create a function that takes a list of numbers and returns the minimum value in the list. If the list is empty, have the function return False.
# Example: minimum([37, 2, 1, -9]) should return -9
# Example: minimum([]) should return False

def mini(list):
    min = list[0]
    for x in range(len(list)):
        if min > list[x]:
            min = list[x]
    if len(list) < 1:
        return False
    return min
myList = [5,4,3,8,1]
# num = mini(myList)


# Maximum - Create a function that takes a list and returns the maximum value in the list. If the list is empty, have the function return False.
# Example: maximum([37, 2, 1, -9]) should return 37
# Example: maximum([]) should return False

def maxi(list):
    max = list[0]
    for x in range(len(list)):
        if max < list[x]:
            max = list[x]
    if len(list) < 1:
        return False
    return max
myList = [5,4,3,8,1]
# num = maxi(myList)


# Ultimate Analysis - Create a function that takes a list and returns a dictionary that has the sumTotal, average, minimum, maximum and length of the list.
# Example: ultimate_analysis([37, 2, 1, -9]) should return {'sumTotal': 31, 'average': 7.75, 'minimum': -9, 'maximum': 37, 'length': 4}

def ultimateAnalysis(list):
    sumTotal = 0
    avg = 0
    min = list[0]
    max = list[0]
    for x in range(len(list)):
        sumTotal += list[x]
        if min > list[x]:
            min = list[x]
        if max < list[x]:
            max = list[x]
    avg = sumTotal / len(list)
    newDict = {"sumTotal:": sumTotal, "avg:": avg, "min:": min, "max:": max}
    return newDict
myList = [4, 45, 3, 8, 3, 5]
# newDict = ultimateAnalysis(myList)


# Reverse List - Create a function that takes a list and return that list with values reversed. Do this without creating a second list. (This challenge is known to appear during basic technical interviews.)
# Example: reverse_list([37, 2, 1, -9]) should return [-9, 1, 2, 37]

import math
def reverseList(list):
    temp = 0
    for x in range(0, (math.floor(len(list) / 2)), +1):
        temp = list[x]
        list[x] = list[len(list) - x - 1]
        list[len(list) - x - 1] = temp
myList = [4, 6, 7, 8, 3]
# reverseList(myList)
