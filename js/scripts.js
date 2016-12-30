var time = function() {
    this.now = new Date();
    this.seconds = this.now.getSeconds();
    this.minutes = this.now.getMinutes();
    this.hour = this.now.getHours();

    //hours are in military time. I don't want that
    this.hour = (this.hour > 12) ? this.hour - 12 : this.hour;
    this.analogShowing = false;
};

time.prototype.getTime = function() {
    this.now = new Date();
    var current = this.now.toLocaleTimeString();
    document.querySelector(".digital-clock").innerHTML = current;
};

time.prototype.dissectTime = function() {
    this.now = new Date();
    console.log(this.hour + ", " + this.minutes + ', ' + this.seconds);
};

//how do I call this from the html?
time.prototype.toggle = function() {

    console.log("toggled");

    var dc = document.getElementById("digital");
    var ac = document.getElementById("analog");

    if(rightNow.analogShowing) { //show dc
        ac.style.transform = "translateX(1000px)";
        dc.style.transform = "translateX(0px)";

        changeDisplay(ac, false, 300);
        changeDisplay(dc, true, 100);
 
    }
    else { //show ac
        ac.style.transform = "translateX(0px)";
        dc.style.transform = "translateX(-1000px)";

        changeDisplay(dc, false, 300);
        changeDisplay(ac, true, 100);
 
    }

    rightNow.analogShowing = !rightNow.analogShowing;
};


//driver code
var rightNow = new time();
rightNow.getTime();
rightNow.dissectTime();
console.log(rightNow);

window.setInterval(function() {
    rightNow.getTime();
}, 1000);

var toggleBtns = document.querySelectorAll(".button");

for (var i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].addEventListener('click', rightNow.toggle(), false);
}

function changeDisplay(element, bool, timeout) {
    
    setTimeout(function(element, bool) {
        if (bool) 
            element.style.display = "flex";
        //else
            //element.style.display = "none";
    }, timeout);
}