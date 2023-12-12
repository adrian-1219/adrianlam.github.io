var inSync = false;

function clock() {
	let date = new Date();
	let hrs = date.getHours();
	let mins = date.getMinutes();
	let period = "AM";
	let seconds = date.getSeconds();

	let year = date.getFullYear();
	let month = date.getMonth();
	let day = date.getDate();
	let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

	if (hrs == 0) hrs = 12;
	if (hrs > 12) {
		hrs = hrs - 12;
		period = "PM";
	}

	hrs = hrs < 10 ? `0${hrs}` : hrs;
	mins = mins < 10 ? `0${mins}` : mins;

	let time = `${hrs}:${mins} ${period}`;
	let date2 = `${months[month]} ${day} ${year}`;
	if (inSync == true) {setInterval(clock, 60000);}
	else {setInterval(clock, 60000 - seconds * 1000); inSync = true;}

	document.getElementById("clock").innerText = time;
	document.getElementById("date").innerText = date2;
}

clock();