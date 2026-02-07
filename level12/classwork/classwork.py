# Logical Operators (ლოგიკური ოპერატორები) გამოიყენება True/False მნიშვნელობებთან სამუშაოდ

# 1. and  -> აბრუნებს True მხოლოდ მაშინ თუ ორივე მხარე True-ა
# True and True  -> True
# True and False -> False
# False and True ->False
# False and False-> False

# 2. or -> აბრუნებს True თუ ერთერთი მაინც არის True
# True or False   -> True
# False or False  -> False
# True or True   -> True

print(5 > 3)   # True  (5 მეტია 3-ზე)
print(10 == 10)  # True  (10 უდრის 10-ს)
print(7 < 2)   # False (7 არ არის ნაკლები 2-ზე)
print(8 != 5)  # True  (8 არ უდრის 5-ს)
print(6 >= 6)  # True  (6 მეტია ან ტოლია 6-ზე)

print(5 > 3 and 2 < 4)  # True  (ორივე პირობა სწორია)
print(10 < 5 or 3 == 3)  # True  (ერთერთი პირობა მაინც სწორია)
