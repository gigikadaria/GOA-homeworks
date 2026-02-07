arr = ["Davit", 84, 12, 12.3, True, False, "Zaza"]

arr.insert(0, "Gigi")
arr.insert(3, False)

arr.pop(0)
arr.pop(2)

arr.remove("Davit")
arr.remove(84)
arr.remove(12)
arr.remove(12.3)

print(arr)

# len(arr) --> ფუნქცია, რომელიც საშუალებას გვაძლევს გავიგოთ ჩვენი სიის სიგრძე (ასევე შევიძლია გამოვიყენოთ string–ზეც)

# .append(item) --> ფუნქცია, რომელიც საშუალებას გვაძლევს ჩავამატოთ სიის ბოლოში ახალი ელემენტი, სადაც item მნიშვნელობაა.

# .insert(index, item) --> ფუნქცია, რომელიც საშუალებას გვაძლევს სიის კონკრეტულ ადგილში ჩავამატოთ ახალი მნიშვნელობა, სადაც index აღნიშნავს ინდექსს რომელზეც ვამატებთ მნიშვნელობას, ხოლო item კი თავად მნიშვნელობაა.

# .pop(index) --> ფუნქცია, რომელიც საშუალებას გვაძლევს სიის კონკრეტულ index-ზე ამოვშალოთ ელემენტი.

# .remove(item) --> ფუნქცია, რომელიც საშუალებას გვაძლევს სიის კონკრეტული ელემენტი ამოვშალოთ მნიშვნელობის სახელით.

# .index(item) --> ფუნქცია, რომელიც საშუალებას გვაძლევს გავიგოთ სიაში მყოფი ელემენტების ინდექსი დასახელებით.

print(arr[0])
print(arr[6])
print(arr[-2])
print(len(arr))

arr.append("77")
arr.append("Gela")
arr.append("Vasiko")
arr.append(True)
arr.append(False)

name = input("Enter your name: ")
arr.append(name)

arr.append([1,2,3,4])

arr[-1].append(True)
print(arr)

print(arr)