from turtle import *
speed(5)

# we want to paint a house

# step 1: draw a square (the house base)
width(7)
color("purple")
forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)

forward(200)
left(90)
# end of square

# drawing a door
forward(70)
color("yellow")
begin_fill()
left(90)
forward(120) # height of the door
right(90)
forward(60)
right(90)
forward(120)
end_fill()
# end of drawing the door

# draw roof
penup()
goto(200, 200)
pendown()

color("red")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()

# draw windows (just blue squares) 

# left window
penup()
goto(20, 65)
setheading(0)
pendown()
color("blue")
begin_fill()
forward(30)
left(90)
forward(70)
left(90)
forward(30)
left(90)
forward(70)
left(90)
end_fill()

# right window
penup()
goto(150, 65)
setheading(0)
pendown()
color("blue")
begin_fill()
forward(30)
left(90)
forward(70)
left(90)
forward(30)
left(90)
forward(70)
left(90)
end_fill()

#doorhandle
penup()
goto(65, 55)   # position on the door
pendown()
color("brown")
begin_fill()
width(3)
forward(10)
end_fill()
penup()
goto(0, 0)
pendown()
#end of door handle
#start of door hinges
penup()
goto(135, 110)
pendown()
right(90)
color()
forward(10)
penup()
goto(135,25)
pendown()
forward(10)
penup()
goto(0,0)
pendown()
#end of door hinges
exitonclick()
