# ----------------------------- 2) 10 მაგალითი -----------------------------

# ---- True examples ----
print(5 > 3)
print(10 == 10)
print(4 <= 9)
print(True and True)
print(False or True)

# ---- False examples ----
print(5 < 2)
print(7 == 3)
print(10 != 10)
print(True and False)
print(False or False)


# ----------------------------- 3) ახსნები -----------------------------

# Sequencing: კოდი სრულდება ზედიზედ, ზუსტად იმ რიგში როგორც წერია.
# Iteration: კოდის გამეორება (for / while).
# Selection: არჩევანი პირობების მიხედვით (if, elif, else).


# ----------------------------- 4) Sequencing მაგალითი -----------------------------

x = 5
y = 10
z = x + y
print(z)
# ეს არის sequencing რადგან ხაზები სრულდება ზედიზედ: x -> y -> z -> print


# ----------------------------- 5) for loop ახსნა -----------------------------

# For loop გამოიყენება მაშინ, როცა წინასწარ ვიცით რამდენჯერ გვინდა გამეორება.
# მას შეუძლია სიაზე, ტექსტზე ან range() რიცხვებზე გავლა.


# ----------------------------- 6) range() ახსნა -----------------------------

# range(start, stop, step)
# ქმნის რიცხვების რიგს, რომლებზეც for loop გადის.


# ----------------------------- 7) საყვარელი მანქანა -----------------------------

for i in range(1):
    print("BMW")


# ----------------------------- 8) გვარი 100-ჯერ -----------------------------

for i in range(100):
    print("Qadae")


# ----------------------------- 9) საყვარელი ფერი 46-ჯერ -----------------------------

for i in range(46):
    print("Blue")


# ----------------------------- 10) სახელის პირველი ასო 32-ჯერ -----------------------------

for i in range(32):
    print("G")


# ----------------------------- 11) კონკატინაცია (3 string + 1 int) -----------------------------

a = input("Enter string 1: ")
b = input("Enter string 2: ")
c = input("Enter string 3: ")
d = int(input("Enter integer: "))

result = a + b + c + str(d)
print(result)


# ----------------------------- 12) ტიპების გამოტანა -----------------------------

x = 12
y = 3.14
z = "Hello"
t = True

print(type(x))
print(type(y))
print(type(z))
print(type(t))


# ----------------------------- 13) 4 რიცხვის ჯამი -----------------------------

num1 = int(input("Enter number 1: "))
num2 = int(input("Enter number 2: "))
num3 = int(input("Enter number 3: "))
num4 = int(input("Enter number 4: "))

total = num1 + num2 + num3 + num4
print("Sum is:", total)
