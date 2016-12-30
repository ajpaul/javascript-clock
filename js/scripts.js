var time = function() {

    //tine variables
    this.now = new Date();

    //clock hands
    this.handHour = document.querySelector(".hand-hour");
    this.handMin = document.querySelector(".hand-min");
    this.handSec = document.querySelector(".hand-sec");

    //current degree values. These should increase to infinity
    this.hourDegrees = 0;
    this.minuteDegrees = 0;
    this.secondDegrees = 0;
};

time.prototype.getTime = function() {
    this.now = new Date();
    var current = this.now.toLocaleTimeString();
    document.querySelector(".digital-clock").innerHTML = current;

    this.updateHands(this.now);
};

//this will need to be moved into the getTime function so it updates
time.prototype.setHands = function() {

    var hours = this.now.getHours();
    //hours are in military time. I don't want that
    hours = (hours > 12) ? hours - 12 : hours;

    //we need to find the px percentages for the hand animations
    this.hourDegrees = Math.round((hours / 12) * 360);
    this.minuteDegrees = Math.round((this.now.getMinutes() / 60) * 360);
    this.secondDegrees = Math.round((this.now.getSeconds() / 60) * 360);

    //console.log(secondDegrees);

    this.handHour.style.transform = "rotate(" + this.hourDegrees + "deg)";
    this.handMin.style.transform = "rotate(" + this.minuteDegrees + "deg)";
    this.handSec.style.transform = "rotate(" + this.secondDegrees + "deg)";    
};

//we need a function to just add to the current degrees and not recalculate them
//this will help us when a new minute rolls over, sending the seconds from 59 to 0...
//which will cause the second hand to rotate 360 degrees back to 0.
time.prototype.updateHands = function(time) {

    var oldHours = this.hourDegrees;
    var oldMins = this.minuteDegrees;
    var oldSecs = this.secondDegrees;

    console.log("s: " + oldSecs);
    var test = Math.round(((time.getSeconds() / 60) * 360) - oldSecs);
    console.log(test);
    console.log("----------");

    //we need to find the px percentages for the hand animations
    this.hourDegrees += Math.round(((time.getHours() / 12) * 360) - oldHours);
    this.minuteDegrees += Math.round(((time.getMinutes() / 60) * 360) - oldMins);
    this.secondDegrees += Math.round(((time.getSeconds() / 60) * 360) - oldSecs);

    console.log(this.secondDegrees);

    this.handHour.style.transform = "rotate(" + this.hourDegrees + "deg)";
    this.handMin.style.transform = "rotate(" + this.minuteDegrees + "deg)";
    this.handSec.style.transform = "rotate(" + this.secondDegrees + "deg)";    
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

