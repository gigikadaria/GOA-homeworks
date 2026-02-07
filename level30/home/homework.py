
# .upper() — ტექსტს მთლიანად გადააქცევს დიდ ასოებად
# .lower() — ტექსტს მთლიანად გადააქცევს პატარა ასოებად
# .capitalize() — ტექსტის პირველ ასოს გახდის დიდს, დანარჩენს პატარას
# .find() — ეძებს მითითებულ სიმბოლოს/ტექსტს და აბრუნებს მის ინდექსს (თუ ვერ იპოვა, აბრუნებს -1)


sentence = input("შეიყვანეთ წინადადება: ")
print(sentence.lower())

email = input("შეიყვანეთ ელფოსტის მისამართი: ")

if email.find("@") != -1:
    print("ელფოსტა შეიცავს @ სიმბოლოს".upper())
else:
    print("ელფოსტა არ შეიცავს @ სიმბოლოს".upper())


book = input("შეიყვანეთ წიგნის დასახელება: ")
print(book.capitalize())

text = input("შეიყვანეთ წინადადება: ")
char = input("შეიყვანეთ სიმბოლო: ")

count = text.count(char)
print(count)


word = input("შეიყვანეთ სიტყვა: ")

if word.isupper():
    print("სიტყვა უკვე დიდია!")
else:
    print(word.upper())
