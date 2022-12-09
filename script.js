window.onload = function () {
	countDown();

	setTimeout(function () {
		document.getElementById("fadein").remove();
	}, 1000);

	window.addEventListener("scroll", scrollFunction, false);
};

function countDown() {
	// Set the date we're counting down to
	var countDownDate = new Date("July 2, 2023 14:00:00").getTime();
	var x = setInterval(function () {
		var now = new Date().getTime();

		var distance = countDownDate - now;

		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);

		if (days < 10) days = `0${days}`;
		if (hours < 10) hours = `0${hours}`;
		if (minutes < 10) minutes = `0${minutes}`;
		if (seconds < 10) seconds = `0${seconds}`;

		//todo can a transition go in here
		document.getElementById("countDownTime").innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

		// If the count down is over, write some text
		if (distance < 0) {
			clearInterval(x);
			document.getElementById("countDownTime").innerHTML = "";
		}
	}, 0);
}

function scrollFunction() {
	if (document.documentElement.clientWidth < 600) {
		if (this.scrollY < 100) {
			document.getElementById("titleH1").className = "bigText text";
			document.getElementById("timeAndLocation").className = "bigText text";
		} else {
			document.getElementById("titleH1").className = "smallText text";
			document.getElementById("timeAndLocation").className = "smallText text";
		}
	}
}
