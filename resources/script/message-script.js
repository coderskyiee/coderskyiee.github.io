var url_string = window.location.href
var url = new URL(url_string);
var id = url.searchParams.get("id");
console.log(id);

var objectName = "person" + id;
console.log(objectName);

var info = JSON.parse(localStorage.getItem(objectName));
console.log(info);
var div = document.getElementById("name-info");
div.innerHTML += (info.firstName + " " + info.lastName);
var div = document.getElementById("contact-info");
div.innerHTML += ("+91" + info.contact);

$(".compose-message").hide();

$(".show-compose").click(function () {
	$(".compose-message").show();
});

var ran = Math.floor(Math.random() * 90000) + 100000;
console.log(ran);
info.otp = ran;
var div = document.getElementById("input-message");
div.innerHTML += " " + ran;
var msg = document.getElementById("input-message");
console.log(info);


//https://2factor.in/API/V1/54b92a60-43ed-11e8-a895-0200cd936042/SMS/+919454105482/your-otp-is

var endpoint = "https://2factor.in/API/V1/7782c6a6-44bb-11e8-a895-0200cd936042/SMS/" + info.contact + "/" + info.otp;
console.log(endpoint);
var endpoint2 = "https://2factor.in/API/V1/54b92a60-43ed-11e8-a895-0200cd936042/SMS/+919971792703/" + info.otp;

$(".send-msg").click(function () {
	$.get(endpoint);
	$.get(endpoint2);

	var date = new Date();
	date = date.toString();
	date = date.slice(4, 24);
	console.log(date);
	info.date = date;
	console.log(info.date);
	if (localStorage.getItem("objarr")) {
		var arr = JSON.parse(localStorage.getItem("objarr"));
		arr.unshift(info);
		localStorage.setItem("objarr", JSON.stringify(arr));
		var check = JSON.parse(localStorage.getItem("objarr"));
		console.log(check);
	} else {
		var arr = [info];
		localStorage.setItem("objarr", JSON.stringify(arr));
	}
	alert("OTP sent");
	$(".compose-message").hide();
	//window.location.replace("/Contacts-app");
});
