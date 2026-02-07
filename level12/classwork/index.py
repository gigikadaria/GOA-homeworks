# 9) მომხმარებელს შემოაყვანინეთ პაროლი, მკაცრად შეამოწმეთ უდრის თუ არა მომხმარებლის შეყვანილი პაროლი "Python123"-ის.

guess = input("Enter your password: ") 
password = "Python123"

print(guess == password)

# 12) მომხმარებელს შემოატანინე 4 რიცხვი, შენი დავალებაა გაიგო ამ რიცხვების საშუალო არითმეტიკული.

num1 = int(input("Enter number 1: "))
num2 = int(input("Enter number 2: "))
num3 = int(input("Enter number 3: "))
num4 = int(input("Enter number 4: "))

sum = num1 + num2 + num3 + num4

print(sum / 4)

# 16) შექმენი 3 ცვლადი,ამ ცვლადებში შეინახეთ ინტეჯერ ტიპის მონაცემები, შენი დავალებაა ეს რიცხვები გადაიყვანო string მონაცემთა ტიპში და გამოიტანო ეს რიცხვები ერთ წინადადებაში. მაგ: 304050

num_1 = str(10)
num_2 = str(15)
num_3 = str(20)

print(num_1 + num_2 + num_3)


# Logical Operations

# და --> and
# ან --> or

# and || or


# მე ვიყიდი ყველს და პურს

# მე ვიყიდი ყველს # True
# და
# მე ვიყიდი პურს # False

# მე ვიყიდი ყველს ან პურს

# მე ვიყიდი ყველს # True
# ან
# მე ვიყიდი პურს # True

# and - ლოგიკური ოპერატორი, რომელიც დიდ ყურადღებას აქცევს დებულებების შედეგებს და როგორც კი ერთი პირობა არ შესრულდება, ანუ მისი მნიშვნელობა იქნება False, მთლიანი მნიშვნელობის შედეგი იქნება False.

print(False and True) # False
print(True and False) # False
print(True and True) # True
print(False and False) # True

# or - ლოგიკური ოპერატორი, რომელიც დიდ ყურადღებას აქცევს დებულების შედეგებს და როგორც კი ერთი პირობა შესრულდება, ანუ მისი მნიშვნელობა იქნება True, მთლიანი მნიშვნელობის შედეგი იქნება True.

print(True or False)
print(True or True)
print(False or False)