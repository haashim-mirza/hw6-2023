var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	console.log("Autoplay is set to " + video.autoplay);
	video.loop = false;
	console.log("Loop is set to " + video.loop);
	document.querySelector("#volume").innerHTML = "100%";
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.90;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.90;
	console.log("New speed is " + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead")
	video.currentTime += 10;
	console.log("Video current time is " + video.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
	video.muted = !video.muted;
	if (video.muted){
		console.log("Mute")
		document.querySelector("#mute").innerHTML = "Unmute";
	}else{
		console.log("Unmute")
		document.querySelector("#mute").innerHTML = "Mute";
	}
});

document.querySelector("#slider").addEventListener("input", function() {
	console.log("Changing volume");
	var vol = document.querySelector("#slider").value;
	video.volume = vol/100;
	console.log("Volume is " + video.volume);
	document.querySelector("#volume").innerHTML = vol + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
	if (!video.classList.contains("oldSchool")) {
		// video.classList.remove("video")
		video.classList.add("oldSchool");
		console.log("class changed to oldSchool");
	}
});

document.querySelector("#orig").addEventListener("click", function() {
	if (video.classList.contains("video")) {
		video.classList.remove("oldSchool")
		console.log("class changed to orignal")
	}
});
