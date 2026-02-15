nums = [1,2,3,4,5,6,7,8,9,10]
for i in range(11,21):
    nums.append(i)
for _ in range(5):
    nums.pop()
print(nums)

nums = [1,2,3,4,5,6,7,8,9,10]
for i in range(11,21):
    nums.append(i)
for x in [1,2,3,4,5]:
    nums.remove(x)
print(nums)

nums = [1,2,3,4,5,6,7,8,9,10]
mid = len(nums)//2
for i in range(100,110):
    nums.insert(mid, i)
for x in [1,2,3,4,5]:
    nums.remove(x)
for _ in range(5):
    nums.pop()
print(nums)

colors = ["red","green","blue","yellow","purple"]
colors.pop()
print(colors)

nums = [10,20,30,40]
nums.append(50)
print(nums)
