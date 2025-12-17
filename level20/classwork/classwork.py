num = int(input("შეიყვანეთ რიცხვი: "))

if num < 10:
    print(num, "არის 10-ზე ნაკლები")
elif num < 20:
    print(num, "არის 20-ზე ნაკლები")

weather = input("შეიყვანეთ ამინდი: ")

if weather == "მზიანი":
    print("ვივარჯიშებ გარეთ")
elif weather == "წვიმიანი":
    print("ვივარჯიშებ გარეთ")
else:
    print("არ ვივარჯიშებ დღეს")
