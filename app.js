document.addEventListener('DOMContentLoaded', runJavascript)

function runJavascript() {
    const input = document.querySelector('#screen')
    const allSpans = document.querySelectorAll('span:not(#equals)')
    // const clear = document.getElementById('clear')
    // const equals = document.getElementById('equals')
    const spanArray = Array.from(allSpans)
    // const buttonContainer = document.querySelector("#buttons-container")
    // let regex1 = /x/gmi


    spanArray.map(span => {
        span.addEventListener('click', displayNum)
    })
    clear.addEventListener('click', clearInput)
    equals.addEventListener('click', evaluate)
    // buttonContainer.addEventListener('click', displayNum)


    function displayNum() {
        console.log(event.target)
        input.innerText += event.target.innerText
    }
    function clearInput(){
        input.innerText = ""
    }

    function switchChars(expression){
        // expression = input.innerText
        switch(expression){
            case expression.match(/x{2,}/gmi):
                //remove all but one x
                expression.replace(/x{2,}/gmi, "x")
            // case /\/{2,}/gmi.test(expression):
            //     //remove all but one ÷
            //     expression.replace(/\/{2,}/gmi, "/")
            // case /+{2,}/gmi.test(expression):
            //     //remove all but one +
            //     expression.replace(/+{2,}/gmi, "+")
            // case /-{2,}/gmi.test(expression):
            //     //remove all but one -
            //     expression.replace(/-{2,}/gmi, "-")
            // case expression.test(/={2,}/gmi):
            //     //remove all but one =
            //     expression.replace(/={2,}/gmi, "=")
            default:
                expression
        }
    }
    function evaluate(){
        let equation = input.innerText
        switchChars(equation)
        let eq2 = equation.replace("=", "").replace("x", "*").replace("÷", "/")
        let answer = eval(eq2)
        input.innerText = answer
    }

}