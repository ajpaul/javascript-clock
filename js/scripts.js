var time = function() {
    this.now = new Date();
    this.seconds = this.now.getSeconds();
    this.minutes = this.now.getMinutes();
    this.hour = this.now.getHours();

    //hours are in military time. I don't want that
    this.hours = (this.hours > 12) ? this.hours - 12 : this.hours;
    this.analogShowing = false;
}

time.prototype.getTime = function() {
    this.now = new Date();
    var current = this.now.toLocaleTimeString();
    document.querySelector(".digital-clock").innerHTML = current;
}

time.prototype.dissectTime = function() {
    this.now = new Date();
    console.log(this.hour + ", " + this.minutes + ', ' + this.seconds);
}

time.prototype.toggle = function() {
    alert("toggle");
}

var lol = new time();
lol.getTime();
lol.dissectTime();
console.log(lol);

window.setInterval(function() {
    lol.getTime();
}, 1000);

function toggle() {
    if(lol.analogShowing)
        alert("analogShowing");
    else 
        alert("digital showing");
}