def add (in1, in2):
    # print(isinstance(in1,str))
    # if isinstance(in1,str) == True and isinstance(in1,str) == True:
    #     in3 = in1+in2
    if isinstance(in1,int) == True and isinstance(in1,int) == True:
        in3 = in1+in2
    else :
        in3 = str(in1) + str(in2)


    return in3


print(add("hello ", "World"))
print(add("hello ", 1231212))
print(add(123, 123))