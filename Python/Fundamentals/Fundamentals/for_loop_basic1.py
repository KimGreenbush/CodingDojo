#Basic
for x in range(151):
    print(x)

#Multiples of Five
for x in range(5, 1001, 5):
    print(x)

#Counting, the Dojo Way
for x in range(1, 101):
    if x % 10 == 0:
        print("Coding Dojo")
    elif x % 5 == 0:
        print("Coding")
    else:
        print(x)

#Whoa. That Sucker's Huge
y = 0
for x in range(500000):
    if x % 2 != 0:
        y += x
print(y)

#Countdown by Fours
for x in range(2018, 0, -4):
    print(x)

#Flexible Counter
lowNum = 0
highNum = 20
mult = 3
for x in range(lowNum, highNum):
    if x % mult == 0:
        print(x)
