//driver code
var rightNow = new time();
rightNow.getTime();
rightNow.setHands();

window.setInterval(function() {
    rightNow.getTime();
}, 1000);

//set up click handler for toggle buttons
var toggleBtns = document.querySelectorAll(".button");

for (var i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].onclick = rightNow.toggle;
}
