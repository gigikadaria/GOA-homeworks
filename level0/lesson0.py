from turtle import *
speed(20)

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

# draw windows (just gray squares) 

# left window

penup()
goto(20, 65)
setheading(0)
pendown()
color("gray")
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
color("gray")
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

#start of window hinges
penup()
goto(185, 65)
pendown()
right(180)
forward(10)
penup()
goto(185, 125)
pendown()
forward(10)
penup()
goto(15, 65)
pendown()
forward(10)
penup()
goto(15, 125)
pendown()
forward(10)
penup()
goto(0, 0)
pendown()

#end of window hinges

#start of rain drain

penup()
goto(205, 200)
pendown()
color("gray")
left(180)
width(6)
forward(160)
left(90)
forward(10)

#end of right rain drain

#start of left rain drain

penup()
goto(-5, 200)
pendown()
right(90)
forward(160)
left(90)
forward(-10)

#end of right rain drain(end of the rain drains)

#just a straight line for the home

penup()
goto(-1200, -5)
pendown()
color("black")
width(3)
forward(2500)
penup()
goto(535,0)
left(240)
pendown()
forward(1000)
penup()
goto(-300,-5)
left(-370)
pendown()
forward(1000)
exitonclick()
