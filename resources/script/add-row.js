// adding row in the contacts v
function addRow(tableID, person) {
	var rowElement = $('<tr><td id=' + person.id + '>' + person.fullname() + '</td></tr>');
	$('#' + tableID).append(rowElement);

}

// calling addrow, can be optimised.

addRow('mytable', person1);
addRow('mytable', person2);
addRow('mytable', person3);
addRow('mytable', person4);
addRow('mytable', person5);


// linking contacts to the other page by their ids

$("td").click(function redirect() {
	var id = $(this).attr('id');
	if (id != null) {
		console.log(window.location.hostname + window.location.pathname);
		window.location = "/message.html?id=" + id;
	}
});

// refobj is the sent otp object array.

var refobj = JSON.parse(localStorage.getItem("objarr")) || [];

if (refobj.length > 0) {
	$(".noSentText").hide();
	$(".yesSentText").show();

	function addSentRow(tableID, person) {

		var rowElement = $('<tr> <td>' + person.firstName + ' ' + person.lastName + '</td> <td>' + person.date + '</td><td> ' + person.otp + '</td></tr>');
		$('#' + tableID).append(rowElement);

	}
	refobj.forEach(function (element) {
		addSentRow("sentTable", element);
	});
} else {
	$(".noSentText").show();
	$(".yesSentText").hide();
}
