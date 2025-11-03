#input არის წყარო რომლიდანაც კომპიუტერს მივაწოდებთ ინფორმაციას მაგალითად კამერათი ან მიკროფონით, მაუსით, კლავიატურიტ
#output არის წყარო რომლიდანაც კომპიუტერი მოგვაწოდებს ინფორმაციას მაგალითად მონიტორით
Group = input("which group are u in?")
print(Group)
#string
Country = "georgia"
color = "Blue"
city = "Tbilisi"
animal = "Dog"
language = "Python"
#integer
Celsius = 20
year = 2025
students = 30
apples = 12
score = 100
#float
Lenght = 60.2
width = 65.5
temperature = 36.6
price = 19.99
distance = 12.4

Speed = "Fast"
Pixels = 100
height = 1.75

print(type(Speed))
print(type(Pixels))
print(type(height))

Food1 = input("შეიყვანე პირველი საჭმელი: ")
Food2 = input("შეიყვანე მეორე საჭმელი: ")

print(Food1 + Food2)

num1 = float(input("write a number"))
num2 = float(input("write a number"))
num3 = float(input("write a number"))
num4 = float(input("write a number"))
num5 = float(input("write a number"))
average = (num1 + num2 + num3 + num4 + num5) / 5
print(average)

name = input("შეიყვანე შენი სახელი: ")
surname = input("შეიყვანე შენი გვარი: ")
age = input("შეიყვანე შენი ასაკი: ")
height = input("შეიყვანე შენი სიმაღლე: ")
weight = input("შეიყვანე შენი წონა: ")

print("ჩემი სახელია " + name + " " + surname + ", მე ვარ " + age + " წლის, სიმაღლე " + height + " მეტრია და წონა " + weight + " კილოგრამი.")