function playCalculator() {
    document.getElementById("accept-page").style.display = "none";
    document.getElementById("video-wrapper").style.visibility = "visible";
    var video = document.getElementById("childe-vid");
    video.controls = false;
    video.loop = true;
    video.play();
}