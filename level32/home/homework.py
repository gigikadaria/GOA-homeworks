# .append() ამატებს ელემენტს სიის ბოლოში
# .insert() ამატებს ელემენტს მითითებულ პოზიციაზე (ინდექსზე)
# .pop() შლის ელემენტს სიის ბოლოდან ან მითითებული ინდექსიდან



numbers = [1, 2, 3, 4, 5]
print(len(numbers))



nums = []

for i in range(5):
    num = int(input("შეიყვანეთ რიცხვი: "))
    nums.append(num)

print(nums)



colors = ["red", "green", "blue", "yellow", "purple"]
colors.pop()
print(colors)


animals = ["dog", "cat", "elephant", "lion"]
animals.insert(1, "monkey")
print(animals)



people = []

for i in range(3):
    name = input("შეიყვანეთ სტუდენტის სახელი: ")
    people.append(name)

people.insert(0, "Teacher")
people.pop()

print(len(people))
print(people)
