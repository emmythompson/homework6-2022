var video = document.querySelector('#player1');

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow down this video");
	video.playbackRate *= 0.95;
	console.log('video.playbackRate');
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed up this video");
	video.playbackRate /= 0.95;
	console.log('video.playbackRate');
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip ahead");
	if (video.currentTime < (video.duration -15)){
		console.log('original time ' + video.currentTime);
		video.currentTime += 15;
		console.log('new time ' + video.currentTime)
	}
	else{
		video.currentTime = 0;
		video.play();
		console.log('new time ' + video.currentTime)
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute this video");
	if (video.muted === false) {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
 }
  else {
        video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
    }
});

document.querySelector("#slider").addEventListener("click", function() {
	console.log("slider");
	video.volume = this.value/ 100;
	document.querySelector("#volume").innerHTML = (video.volume * 100 + '%');
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old school");
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldSchool");
});