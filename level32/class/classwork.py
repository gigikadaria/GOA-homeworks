#COMMENTS: ფუნქციების აღწერა
# .append(value) -> სიის ბოლოში დაამატებს ელემენტს
# .insert(index, value) -> ჩასვამს ელემენტს კონკრეტულ პოზიციაზე სიაში
# .pop([index]) -> წაშლის ელემენტს სიიდან, თუ არ მიუთითია index, წაშლის ბოლო ელემენტს


my_list = []
my_list.append(5)


list_123 = [1,2,3]
list_123.append(4)


my_list.append("Gigi")


my_list.append(10)
my_list.append(20)


my_list.append("apple")


my_list.append(True)


my_list.append(0)


my_list.append("Python")


my_list.append("end")


my_list.append(99)


my_list.pop()


removed_item = list_123.pop()


deleted_element = removed_item

list_123.pop(1)


list_123.pop(0)


empty_list = []
try:
        empty_list.pop()
except IndexError:
            print("16) Cannot pop from empty list")


            if "apple" in my_list:
                        my_list.pop(my_list.index("apple"))


                        if 10 in my_list:
                                    my_list.pop(my_list.index(10))


                                    print("19) Deleted element:", deleted_element)


                                    print("20) List after pops:", my_list)


                                    if "apple" in my_list:
                                                print("21) Index of 'apple':", my_list.index("apple"))
                                    else:
                                                print("21) 'apple' not in list")


                                                print("22) Index of 5:", my_list.index(5))


                                                print("23) Index of 'Python':", my_list.index("Python"))


                                                print("24) Index of first element:", my_list.index(my_list[0]))


                                                print("25) Index of last element:", len(my_list)-1)


                                                cat_index = my_list.index("cat") if "cat" in my_list else -1
                                                print("26) Index of 'cat':", cat_index)


                                                saved_index = my_list.index("Python")


                                                print("28) Saved index:", saved_index)


                                                print("29) Index of 0:", my_list.index(0))


                                                hello_index = my_list.index("hello") if "hello" in my_list else -1
                                                print("30) Index of 'hello':", hello_index)


                                                my_list.insert(0,10)


                                                my_list.insert(1,"hi")


                                                my_list.insert(0,"start")


                                                my_list.insert(len(my_list)//2,"middle")


                                                my_list.insert(len(my_list),"end")


                                                my_list.insert(1,100)


                                                my_list.insert(2,"Python")


                                                my_list.insert(0,True)


                                                my_list.insert(3,False)


                                                my_list.insert(4,"new")


                                                list_length = len(my_list)


                                                print("42) Length of list:", list_length)


                                                length_var = len(my_list)


                                                is_empty = len(my_list) == 0
                                                print("44) Is list empty?", is_empty)


                                                print("45) Is length > 5?", len(my_list) > 5)


                                                print("46) Number of elements:", len(my_list))


                                                temp_list = [1,2,3]
                                                print("47) Length of temp_list:", len(temp_list))


                                                temp_list.append(4)
                                                print("48) Length after append:", len(temp_list))


                                                temp_list.pop()
                                                print("49) Length after pop:", len(temp_list))


                                                print("50) Length of [1,2,3]:", len([1,2,3]))


                                                temp_list.append(5)
                                                temp_list.pop()


                                                temp_list.append(6)
                                                temp_list.pop(temp_list.index(6))


                                                temp_list.insert(0,7)
                                                print("53) Length after insert:", len(temp_list))


                                                temp_list.append(8)
                                                temp_list.append(9)
                                                temp_list.append(10)


                                                temp_list.pop()
                                                temp_list.pop()


                                                if "Python" in my_list:
                                                            print("56) Index of 'Python':", my_list.index("Python"))


                                                            my_list.insert(0,"hello")


                                                            my_list.append("world")


                                                            my_list.pop()


                                                            print("60) Final list:", my_list)


                                                            num_list = [1,2,3,4,5]


                                                            num_list.append(6)


                                                            num_list.pop(0)


                                                            print("64) Index of third element:", 2)  


                                                            num_list.insert(len(num_list)//2,99)


                                                            print("66) Length of num_list:", len(num_list))


                                                            num_list.append("done")


                                                            num_list.pop()


                                                            num_list.append("ok")


                                                            print("70) Final num_list:", num_list)
                                                            