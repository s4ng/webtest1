var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/change1.png'){
        myImage.setAttribute('src', 'images/change2.png');
    }
    else{
        myImage.setAttribute('src', 'images/change1.png');
    }
}

var myButton = document.querySelector('button');
var nightButton = document.getElementById('#night');
var myHeading = document.querySelector('h1');

function setUserName(){
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'S4ng is cool, ' + myName;
}
//true는 낮 false는 밤을 뜻함.
var isDaytime = true;
localStorage.setItem('time', isDaytime);
function changeBG(){
    if(localStorage.getItem('time') == true){
        document.querySelector('body').style.backgroundColor = "gray";
        document.querySelector('body').style.color = "white";
        isDaytime = false;
    } else {
        document.querySelector('body').style.backgroundColor = "white";
        document.querySelector('body').style.color = "black";
        isDaytime = true;
    }
}

if(!localStorage.getItem('name')){
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'S4ng is cool, ' + storedName;
}

myButton.onclick = function(){
    setUserName();
}

nightButton.onclick = function() {
    changeBG();
}