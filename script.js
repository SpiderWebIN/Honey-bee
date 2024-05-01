var mouseX = 0; // Initial cursor X position
var mouseY = 0; // Initial cursor Y position
var videoX = 0; // Initial video X position
var videoY = 0; // Initial video Y position
var easingFactor = 0.1; // Smoothing factor

document.addEventListener("mousemove", function(event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
});

function updateVideoPosition() {
  var dx = mouseX - videoX;
  var dy = mouseY - videoY;
  
  videoX += dx * easingFactor;
  videoY += dy * easingFactor;
  
  var video = document.getElementById("myVideo");
  video.style.left = videoX + "px";
  video.style.top = videoY + "px";

  requestAnimationFrame(updateVideoPosition);
}

updateVideoPosition();
