input.onButtonPressed(Button.A, function () {
    code += -1
    if (code < 0) {
        code = codeMax
    }
})
input.onButtonPressed(Button.AB, function () {
    codeStatus = 1
})
input.onButtonPressed(Button.B, function () {
    code += 1
    if (code > codeMax) {
        code = 0
    }
})
let codeStatus = 0
let codeMax = 0
let code = 0
code = 0
codeMax = 1
while (codeStatus == 0) {
    basic.showNumber(code)
}
while (codeStatus == 1) {
    while (code == 0) {
        basic.showString("Hello, world!")
        basic.pause(1000)
    }
    while (code == 1) {
        basic.showIcon(IconNames.Happy)
    }
}
