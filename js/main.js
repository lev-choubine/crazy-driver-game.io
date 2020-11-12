const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const h1= document.querySelector('h1');
const input = document.querySelector('input');
let numb = 0;
h1.innerText=numb;

plus.addEventListener('mouseover', function(){
    plus.style.backgroundColor="white";
})

minus.addEventListener('mouseover', function(){
    minus.style.backgroundColor="white";
})

plus.addEventListener('mouseout', function(){
    plus.style.backgroundColor="rgb(199, 199, 199)";
})

minus.addEventListener('mouseout', function(){
    minus.style.backgroundColor="rgb(199, 199, 199)";
})

plus.addEventListener('click', function(){
    let x = parseInt(input.value, 10);
    numb = numb + x;
    h1.innerText = numb;
    if(numb < 0){
        h1.style.color="red";
    }else{h1.style.color="black"}
})

minus.addEventListener('click', function(){
    let x = parseInt(input.value, 10);
    numb = numb - x;
    h1.innerText = numb;
    if(numb < 0){
        h1.style.color="red";
    }else{h1.style.color="black"}
})