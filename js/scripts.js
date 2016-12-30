var time = function() {
    this.now = new Date();
    this.seconds = this.now.getSeconds();
    this.minutes = this.now.getMinutes();
    this.hour = this.now.getHours();

    //hours are in military time. I don't want that
    this.hour = (this.hour > 12) ? this.hour - 12 : this.hour;
};

time.prototype.getTime = function() {
    this.now = new Date();
    var current = this.now.toLocaleTimeString();
    document.querySelector(".digital-clock").innerHTML = current;
};

time.prototype.setHands = function() {
    this.now = new Date();
    console.log(this.hour + ", " + this.minutes + ', ' + this.seconds);

    //we need to find the px percentages for the hand animations
    var hourDegrees = (this.hour / 12) * 360;
    var minuteDegrees = (this.minutes / 60) * 360;
    var secondDegrees = (this.seconds / 60) * 360;

    console.log(hourDegrees + ", " + minuteDegrees + ', ' + secondDegrees);


};

//how do I call this from the html?
time.prototype.toggle = function() {

    var that = this;

    var dc = document.getElementById("digital");
    var ac = document.getElementById("analog");

    if(this.classList.contains('b1')) { //show dc
        ac.style.transform = "translateX(1000px)";
        dc.style.transform = "translateX(0px)";        
    }
    else { //show ac
        ac.style.transform = "translateX(0px)";
        dc.style.transform = "translateX(-1000px)";       
    }

    //remove the clicked class from both buttons
    document.querySelector('.b1').classList.remove('button-clicked');
    document.querySelector('.b2').classList.remove('button-clicked');    
    this.classList.add('button-clicked');
    
};


//driver code
var rightNow = new time();
rightNow.getTime();
rightNow.setHands();
console.log(rightNow);

window.setInterval(function() {
    rightNow.getTime();
}, 1000);

var toggleBtns = document.querySelectorAll(".button");

for (var i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].onclick = rightNow.toggle;
}

