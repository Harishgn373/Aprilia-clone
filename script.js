
function menu() {
    document.getElementById("menu").style.display = "none";
    document.getElementById("about-detail").style.display = "block";
    document.getElementById("wrong").style.display = "block";
}
function worng() {
    document.getElementById("menu").style.display = "block";
    document.getElementById("about-detail").style.display = "none";
    document.getElementById("wrong").style.display = "none";
}

function myfun() {
    alert("Your test ride booking successfully");
}
function playSound() {
    var Exhaust = document.getElementById("sound-exhaust");
    Exhaust.play();
    document.getElementById("play-button").style.display = "none";
    document.getElementById("pasue-button").style.display = "block";
}
function pasueSound() {
    var Exhaust = document.getElementById("sound-exhaust");
    Exhaust.pause();
    document.getElementById("play-button").style.display = "block";
    document.getElementById("pasue-button").style.display = "none";
}

function stripes() {
    document.getElementById("stripes-img").style.display = "block";
    document.getElementById("first-name").style.display = "block";
    document.getElementById("dark-img").style.display = "none";
    document.getElementById("second-name").style.display = "none";
    document.getElementById("light-img").style.display = "none";
    document.getElementById("thrid-name").style.display = "none";
}
function dark() {
    document.getElementById("stripes-img").style.display = "none";
    document.getElementById("first-name").style.display = "none";
    document.getElementById("dark-img").style.display = "block";
    document.getElementById("second-name").style.display = "block";
    document.getElementById("light-img").style.display = "none";
    document.getElementById("thrid-name").style.display = "none";
}
function light() {
    document.getElementById("stripes-img").style.display = "none";
    document.getElementById("first-name").style.display = "none";
    document.getElementById("dark-img").style.display = "none";
    document.getElementById("second-name").style.display = "none";
    document.getElementById("light-img").style.display = "block";
    document.getElementById("thrid-name").style.display = "block";
}
