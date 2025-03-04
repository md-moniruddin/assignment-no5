const buttoon = document.getElementById('colorChange');

const colors = [ '#ef788e ',  '#40d4cd', '#72cc9a', '#e6e77b', '#77afe0', '#d554c7',  '#9254d5', '#f15f5f', '#666360 '];
let colorIndex = 0;


buttoon.addEventListener('click',function(){
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1)%colors.length;
});
