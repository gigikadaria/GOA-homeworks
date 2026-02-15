def average_of_five(a, b, c, d, e):
    average = (a + b + c + d + e) / 5
    print("საშუალო არითმეტიკული არის:", average)

n1 = float(input("შეიყვანეთ პირველი რიცხვი: "))
n2 = float(input("შეიყვანეთ მეორე რიცხვი: "))
n3 = float(input("შეიყვანეთ მესამე რიცხვი: "))
n4 = float(input("შეიყვანეთ მეოთხე რიცხვი: "))
n5 = float(input("შეიყვანეთ მეხუთე რიცხვი: "))

average_of_five(n1, n2, n3, n4, n5)

def sayHi(name=""):
    print("გამარჯობა,", name)

user_name = input("შეიყვანეთ თქვენი სახელი: ")
if user_name == "":
    sayHi()
else:
    sayHi(user_name)

def name_to_upper(name):
    return name.upper()

name_input = input("შეიყვანეთ სახელი: ")
print("დიდი ასოებით:", name_to_upper(name_input))
