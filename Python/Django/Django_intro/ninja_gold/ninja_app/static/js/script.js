function addGreen() {
    $("p").addClass("green");
}

function addRed() {
    $("p").addClass("red");
}

$(document).ready(function () {

	$("div.activities").on("load", "p",  function () {
        console.log("Entered activities")
        var log = $(".activities p").text();
		var words = log.split(" ");
		console.log(words);
	});
});