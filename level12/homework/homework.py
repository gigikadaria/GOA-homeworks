# 1) შედარებითი ოპერატორები და 5-5 მაგალითი

# > მეტია
print(5 > 3)
print(10 > 2)
print(7 > 6)
print(100 > 50)
print(9 > 1)

# < ნაკლებია
print(2 < 5)
print(1 < 9)
print(4 < 8)
print(10 < 20)
print(3 < 7)

# >= მეტია ან ტოლია
print(5 >= 5)
print(10 >= 3)
print(4 >= 4)
print(8 >= 7)
print(9 >= 1)

# <= ნაკლებია ან ტოლია
print(5 <= 7)
print(4 <= 4)
print(2 <= 9)
print(1 <= 3)
print(6 <= 6)

# == ტოლია
print(5 == 5)
print(3 == 3)
print(10 == 10)
print(2 == 2)
print(7 == 7)

# != არ არის ტოლი
print(5 != 3)
print(7 != 1)
print(10 != 9)
print(2 != 5)
print(8 != 6)



# 2) Logical operators ახსნა

# and -> აბრუნებს True-ს მხოლოდ მაშინ, როცა ორივე პირობა Trueა
# or  -> აბრუნებს True-ს თუ ერთი მაინც Trueა
# not -> აბრუნებს პირიქით მნიშვნელობას (True -> False, False -> True)



# 3) Logical operators 3-3 მაგალითი

# and
print(5 > 3 and 10 > 2)
print(7 > 5 and 1 < 2)
print(9 == 9 and 4 <= 4)

# or
print(5 > 10 or 3 < 4)
print(1 == 2 or 7 > 3)
print(10 < 1 or 2 == 2)

# not
print(not True)
print(not (5 > 3))
print(not (10 == 9))



# 4) მომხმარებელი შემოიტანს რიცხვს და შევადარებთ წინასწარ რიცხვს

num = int(input("შეიყვანეთ რიცხვი: "))
fixed_number = 10
print(num > fixed_number)



# 5) მომხმარებელი შემოიტანს სახელს და შევამოწმებთ == ოპერატორით

user_name = input("შეიყვანეთ თქვენი სახელი: ")
my_name = "Gigi"   
print(user_name == my_name)



# 6) მომხმარებელი შემოიტანს ასაკს და შევამოწმებთ მეტია თუ არა 18-ზე

age = int(input("შეიყვანეთ თქვენი ასაკი: "))
print(age > 18)
