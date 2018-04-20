$(".tab2").hide();
$(".tab1").hide();

$(".contacts-tab").click(function () {
	$(".tab1").show();
	$(".tab2").hide();
	$(".tab3").hide();
});

$(".messages-sent-tab").click(function () {
	$(".tab2").show();
	$(".tab1").hide();
	$(".tab3").hide();
});

var person1 = {
	id: 1,
	firstName: "Bruce",
	lastName: "Banner",
	contact: 8700002354,
	otp: '',
	date: '',
	fullname: function () {
		return this.firstName + ' ' + this.lastName;
	}
};

var person2 = {
	id: 2,
	firstName: "Peter",
	lastName: "Parker",
	contact: 8574727668,
	otp: '',
	date: '',
	fullname: function () {
		return this.firstName + ' ' + this.lastName;
	}
};
var person3 = {
	id: 3,
	firstName: "Tony",
	lastName: "Stark",
	contact: 9454105482,
	otp: '',
	date: '',
	fullname: function () {
		return this.firstName + ' ' + this.lastName;
	}
};

var person4 = {
	id: 4,
	firstName: "Natasha",
	lastName: "Romonoff",
	contact: 7073840123,
	otp: '',
	date: '',
	fullname: function () {
		return this.firstName + ' ' + this.lastName;
	}
};

var person5 = {
	id: 5,
	firstName: "Steve",
	lastName: "Rogers",
	contact: 9717974265,
	otp: '',
	date: '',
	fullname: function () {
		return this.firstName + ' ' + this.lastName;
	}
};

localStorage.setItem("person1", JSON.stringify(person1));
localStorage.setItem("person2", JSON.stringify(person2));
localStorage.setItem("person3", JSON.stringify(person3));
localStorage.setItem("person4", JSON.stringify(person4));
localStorage.setItem("person5", JSON.stringify(person5));

