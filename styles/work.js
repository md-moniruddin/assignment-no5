const firstValue = document.getElementById('firstValue');
const secondValue = document.getElementById('secondValue');
const buttons = document.querySelectorAll('.my-butn');
const logList = document.getElementById('logList');


for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        let first = parseInt(firstValue.innerText);
        let second = parseInt(secondValue.innerText);

        first--;
        second++;

        firstValue.innerText = first.toString().padStart(2, '0');
        secondValue.innerText = second.toString().padStart(2, '0');

        buttons[i].disabled = true;
        buttons[i].style.backgroundColor = '#D0D8E8';
        buttons[i].style.cursor = 'not-allowed';

    

        alert('Board Updated Successfully');
    });
}

document.getElementById('otherPage').addEventListener('click', function(event){
    window.location.href="./second.html"
})