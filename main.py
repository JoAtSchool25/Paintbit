
plotX = 0
plotY = 0

isToggled = False
isColoured = False

def onStart():
    num = 0

    while num < 3:
        num = num + 1

        basic.show_number(num)
        basic.clear_screen()
        

#onStart()

led.plot(plotX, plotY)

def goRight():
    global plotX
    global plotY
    if isColoured == False:
        led.unplot(plotX, plotY)

    if plotX < 4:
        plotX = plotX + 1

    led.plot(plotX, plotY)

def goLeft():
    global plotX
    global plotY
    #led.unplot(plotX, plotY)

    if plotX > 0:
        plotX = plotX - 1
    
    led.plot(plotX, plotY)

def goDown():
    global plotX
    global plotY
    #led.unplot(plotX, plotY)

    if plotY < 4:
        plotY = plotY + 1
    
    led.plot(plotX, plotY)

def goUp():
    global plotX
    global plotY
    #led.unplot(plotX, plotY)

    if plotY > 0:
        plotY = plotY - 1

    led.plot(plotX, plotY)

def switchInput():
    global isToggled
    if isToggled == False:
        #print("IsToggled Set TO True")
        isToggled = True

    elif isToggled == True:
        #print("IsToggled is set to FALSE")
        isToggled = False

def colourPixel():
    global plotX
    global plotY

    isColoured = True
    led.plot(plotX, plotY)

def on_button_pressed_b():
    pass
    if isToggled == False:
        goRight()
        
    else:
        goDown()
input.on_button_pressed(Button.B, on_button_pressed_b)



def on_button_pressed_a():
    pass
    if isToggled == False:
        goLeft()

    else:
        goUp()


input.on_button_pressed(Button.A, on_button_pressed_a)


def on_button_pressed_ab():
    pass

    #switchInput()
    colourPixel()

input.on_button_pressed(Button.AB, on_button_pressed_ab)