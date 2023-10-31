let inputString = "";
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            try {
                inputString = eval(inputString);
                document.querySelector('input').value = inputString;
            } catch (error) {
                console.error("Error:", error);
                document.querySelector('input').value = "Error";
            }
        } else if (e.target.innerHTML === 'C') {
            // Clear the input by setting inputString to an empty string
            inputString = "";
            document.querySelector('input').value = inputString;
        } else {
            console.log(e.target);
            inputString += e.target.innerHTML;
            document.querySelector('input').value = inputString;
        }
    });
});
