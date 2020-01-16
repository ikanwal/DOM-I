var sec = 0;

function pad(val) {
    return val > 9 ? val : "0" + val;
}
var timer = setInterval(function () {
    document.getElementById("secondTens").innerHTML = pad(++sec % 60);
    document.getElementById("secondOnes").innerHTML = pad(parseInt(sec / 60, 10));
}, 1000);

setTimeout(function () {
    clearInterval(timer);
}, 10000);