
numbers = [5, 10, 15, 20, 25]

total = 0
count = 0

for num in numbers:
    total += num
    count += 1

average = total / count

print("სიის ელემენტების ჯამი:", total)
print("სიის ელემენტების საშუალო არითმეტიკული:", average)


secret_number = 7
user_input = 0

while user_input == 0:
    user_input = int(input("შეიყვანეთ რიცხვი ჩაფიქრებულის გამოსაცნობად: "))

    if user_input == secret_number:
        print("სწორია! რიცხვი გამოიცანით")
    else:
        print("არასწორია, სცადეთ თავიდან")
        user_input = 0


number = 1

while number % 2 == 1:
    number = int(input("შეიყვანეთ რიცხვი (ლუწის მისაღებად): "))

    if number % 2 == 0:
        print("ლუწი რიცხვია")
    else:
        print("რიცხვი კენტია, სცადეთ თავიდან")
