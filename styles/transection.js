const buttoon = document.getElementById('colorChange');

const colors = [ 'green',  'yellow', 'red', 'blue', 'purple'];
let colorIndex = 0;


buttoon.addEventListener('click',function(){
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1)%colors.length;
});
