



console.log("JavaScript file connected");

let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let expression = ""; // Renamed to avoid using reserved word 'String'
let arr = Array.from(buttons); // Fixed variable name

arr.forEach(button => {
    button.addEventListener('click', (e) => {
        let btnText = e.target.innerHTML;

        if (btnText === '=') {
            try {
                expression = eval(expression);
                input.value = expression;
            } catch {
                input.value = "Error";
            }
        } else if (btnText === 'AC') {
            expression = "";
            input.value = expression;
        } else if (btnText === 'DEL') {
            expression = expression.slice(0, -1);
            input.value = expression;
        } else {
            expression += btnText;
            input.value = expression;
        }
    });
});
