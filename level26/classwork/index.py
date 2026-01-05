# 2) შექმენით პროგრამა რომელიც მომხმარებლისგან მიიღებს რიცხვს, შემდეგ დაადგენს დადებითია, უარყოფითი თუ ნული if-elif-else ის საშვალებით, თუ რიცხვი დადებითია შეამოწმეთ არის თუ არა ლუწი თუ არის დაბეჭდეთ "The number is positive and even." ხოლო სხვა შემთხვევაში დაბეჭდეთ "The number is positive and odd."

# num = int(input("Enter number: "))

# if num > 0:
#   print("Number is Positive!")
# elif num == 0:
#   print("Number is 0")
# else:
#   print("Number is Negative")

# 3) მომხმარებელს იქამდე შეეკითხეთ რიცხვები სანამ უარყოფით რიცხვს არ შემოიყვანს, while ციკლისა და input ინსტრუქციის საშვალებით, ასევე პირობითი განცხადებების დადებითობა/უარყოფითობის შესამოწმებლად.

while True:
  num = int(input("Enter Number: "))

  if num < 0:
    print("Number is Negative!")
    break
  else:
    print("Number is Positive, but enter negative!")


# # 4) მომხმარებელს 3 მცდელობა აქვს სწორი PIN კოდის შეყვანისთვის. თუ შეიყვანს სწორად, დაიბეჭდება "Access Granted", სხვა შემთხვევაში "Access Denied" გამოიყენეთ პირობითი განცხადებები

count = 3

while count > 0:
  pin = int(input("Enter pin: "))

  if pin == 1234:
    print("PinCode is Correct, Access Granted!")
    break
  else:
    count -= 1
    print("PinCode is Denied | " + str(count) + " attempts Left")

# arr = ["Davit", "Nika", "Lado", "Nia", "Luka", "Sandro"]

# for i in arr:
#   print(i, "Dav" in i)

# # in ნიშნავს "ში" და ამოწმებს, არის თუ არა რაიმე მნიშვნელობა რაიმე-ში. შეიძლება მოგვცეს 2 პასუხი | True ან False

# print("Davit" in arr) # True
# print("Petre" in arr) # False
# print("Nika" in arr) # True
# print("nika" in arr) # False

# print("l" in "Davit") # False
# print("i" in "Davit") # True
# print("Dav" in "Davit") # True


# break
# continue

while True:
  num = int(input("Enter num: "))

  if num > 0:
    print("Guessed!")
    break
  else:
    continue