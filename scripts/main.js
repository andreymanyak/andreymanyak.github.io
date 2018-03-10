var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mushroom-beach-lembongan.jpg') {
      myImage.setAttribute ('src','images/mushroom-beach-lembongan1.jpg');
    } else {
      myImage.setAttribute ('src','images/mushroom-beach-lembongan.jpg');
    }
}
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h2');
function setUserName() {
  var myName = prompt('Пожалуйста, введите свое имя.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML  = 'А знаете ли Вы, ' + myName + ',';
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML  = 'А знаете ли Вы, ' + storedName + ',';
}
myButton.onclick = function() {
  setUserName();
}

