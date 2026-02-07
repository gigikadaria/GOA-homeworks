# ----------------------------------------
# Custom ფუნქციები
# ----------------------------------------

# Custom ფუნქცია არის ფუნქცია, რომელსაც პროგრამისტი თვითონ ქმნის.
# მას ვიყენებთ იმისთვის, რომ კოდი არ გავიმეოროთ და იყოს უფრო მარტივი.
# პარამეტრები არის ცვლადები, რომლებსაც ფუნქცია იღებს.
# არგუმენტები არის  მნიშვნელობები, რომლებსაც ფუნქციას გადავცემთ.





def sum_numbers(a, b):
    return a + b

num1 = int(input("შეიყვანეთ პირველი რიცხვი: "))
num2 = int(input("შეიყვანეთ მეორე რიცხვი: "))

print("რიცხვების ჯამი არის:", sum_numbers(num1, num2))



def check_even(number):
    if number % 2 == 0:
        print("რიცხვი ლუწია")
    else:
        print("რიცხვი კენტია")

num = int(input("შეიყვანეთ ერთი რიცხვი: "))
check_even(num)




def square_number(number):
    return number ** 2

num = int(input("შეიყვანეთ რიცხვი კვადრატისთვის: "))
print("რიცხვის კვადრატი არის:", square_number(num))




def to_uppercase(text):
    return text.upper()

text = input("შეიყვანეთ ტექსტი: ")
print("დიდი ასოებით:", to_uppercase(text))




def full_name(name, surname):
    print("ჩემი სახელია", name, "და ჩემი გვარია", surname)

name = input("შეიყვანეთ სახელი: ")
surname = input("შეიყვანეთ გვარი: ")

full_name(name, surname)
