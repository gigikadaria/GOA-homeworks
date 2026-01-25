name = input("Enter your name: ")
print(name.upper())

name = input("Enter your name: ")
print(name.lower())

name = input("Enter your name: ")
print(name.capitalize())

word = "python"
symbol = input("Enter a symbol: ")

if symbol in word:
    print(f"{symbol} - {word.index(symbol)}")
else:
    print("This symbol is not in word")

my_name = "Gigi"
print(len(my_name))

name = input("Enter your name: ")
print(name.startswith("g"))

name = input("Enter your name: ")
print(name.endswith("l"))
