let plotX = 0
let plotY = 0
let isToggled = false
let isColoured = false
function onStart() {
    let num = 0
    while (num < 3) {
        num = num + 1
        basic.showNumber(num)
        basic.clearScreen()
    }
}

// onStart()
led.plot(plotX, plotY)
function goRight() {
    
    
    if (isColoured == false) {
        led.unplot(plotX, plotY)
    }
    
    if (plotX < 4) {
        plotX = plotX + 1
    }
    
    led.plot(plotX, plotY)
}

function goLeft() {
    
    
    // led.unplot(plotX, plotY)
    if (plotX > 0) {
        plotX = plotX - 1
    }
    
    led.plot(plotX, plotY)
}

function goDown() {
    
    
    // led.unplot(plotX, plotY)
    if (plotY < 4) {
        plotY = plotY + 1
    }
    
    led.plot(plotX, plotY)
}

function goUp() {
    
    
    // led.unplot(plotX, plotY)
    if (plotY > 0) {
        plotY = plotY - 1
    }
    
    led.plot(plotX, plotY)
}

function switchInput() {
    
    if (isToggled == false) {
        // print("IsToggled Set TO True")
        isToggled = true
    } else if (isToggled == true) {
        // print("IsToggled is set to FALSE")
        isToggled = false
    }
    
}

function colourPixel() {
    
    
    let isColoured = true
    led.plot(plotX, plotY)
}

input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    if (isToggled == false) {
        goRight()
    } else {
        goDown()
    }
    
})
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    if (isToggled == false) {
        goLeft()
    } else {
        goUp()
    }
    
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    // switchInput()
    colourPixel()
})
