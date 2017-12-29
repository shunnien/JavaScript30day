/* Get Our Elements */
// player container div
const player = document.querySelector(".player");
// video
const video = player.querySelector(".player__video.viewer");
// progress container div
const progress = player.querySelector(".progress");
// now progress bar
const progressBar = player.querySelector(".progress__filled");
// play button
const toggle = player.querySelector(".toggle");
// go back 25s or turn back 10s
const skipButtons = player.querySelectorAll("[data-skip]");
// change volume or change play rate
const ranges = player.querySelectorAll(".player__slider");

/* Build out functions */
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  // equal video.method()
  video[method]();
}

/* Hook up the event listners */
video.addEventListener("click", togglePlay);
