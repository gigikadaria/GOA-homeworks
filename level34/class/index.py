def useless(): # parameter place
  print("Hello Group 84")
  print(15)
  print(18)

useless() # argument place

def greet(name):
  print(f"Hello dear {name}")

greet("Davit")
greet("Ilia")

def info(name, surname, age, fav_color, fav_car):
  print(f"Your name is {name}")
  print(f"Your Surname is {surname}")
  print(f"Your age is {age}")
  print(f"Your favourite color is {fav_color}")
  print(f"Your favourite car is {fav_car}")

name = input("enter name: ")
surname = input("enter surname: ")
age = input("enter age: ")
color = input("enter color: ")
car = input("enter car: ")

info(name, surname, age, color, car)

def hello(num):
  if num == 5:
    return 5

  if num == 6:
    return 6

  return num

print(hello(9))