1: სავარჯიშო
numbers = [1, 3, 5, 7, 9]

for num in numbers:
    print(num)

sum = 0
for num in numbers:
    sum += num

print(sum)
2: სავარჯიშო
numbers = [2, 10, 20, 5, 8, 10]
count = 0
for num in numbers:
    if num % 2==0:
        count += 1
print(count)
3: სავარჯიშო
numbers = [2, 15, 5, 1, 0, 10, 8]

min_num = numbers[0]
max_num = numbers[0]

for num in numbers:
    if num < min_num:
        min_num = num
    if num > max_num:
        max_num = num
print("უმცირესი რიცხვი:" ,min_num)
print("უდიდესი რიცხვი:" ,max_num)
4: სავარჯიშო
numbers = [2, -5, 7, 0, 10, 11, 8]

for num in numbers:
    if num % 2 != 0:
        print(num)
5: სავარჯიშო
total = 0
while True:
    num = int(input("შეიყვანეთ რიცხვი:"))
    if num == 0:
        break
    total += num
print("შეყვანილი რიცხვების ჯამი არის:" ,total)
6: სავარჯიშო
total = 0
while True:
    num = int(input("შეიყვანეთ რიცხვი: "))
    if num < 0:
        break
print(total)
7: სავარჯიშო 
while True:
    num = int(input("შეიყვანეთ რიცხვი: "))
    if num % 5 == 0:
        print("შეყვანილია რიცხვი რომელიც იყოფა 5ზე")
        break
8: სავარჯიშო
count = 0

while True:
    num = int(input("შეიყვანეთ რიცხვი: "))
    count += 1
    if num % 2 == 0:
        break
print("მცდელობის რაოდენობა", count)
9: სავარჯიშო
while True:
    num= int(input("შეიყვანეთ რიცხვი: "))
    if num % 2 != 0:
        break
10: სავარჯიშო
while True:
    num = int(input("შეიყვანეთ რიცხვი:"))

    if num < 0:
        continue
    if num >= 0:
        break
    print("შეყვანილია დადებითი რიცხვი", num)
11: სავარჯიშო
while True:
    num = int(input("შეიყვანეთ რიცხვი: "))
    if num <0:
        continue
    if num == 100:
        break
    print("რიცხვი შეყვანილია", num)