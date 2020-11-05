var video = document.getElementById('video');

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
video.srcObject = stream;
video.play();
});
}


canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

var picture = document.getElementById("translation-of-photo").addEventListener("click", function() {
context.drawImage(video, 0, 0, 640, 480);
});








