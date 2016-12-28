

getTime();
dissectTime();

window.setInterval(function() {
    getTime();
}, 1000);

function getTime() {

    var date = new Date();
    var now = date.toLocaleTimeString();

    var time = document.querySelector(".time").innerHTML = now;
}

function dissectTime() {
    var date = new Date();
    var hours = date.getHours();
    hours = ( hours > 12) ? hours - 12: hours;
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    console.log(hours + ", " + minutes + ', ' + seconds);
}