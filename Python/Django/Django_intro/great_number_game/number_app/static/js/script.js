$(document).ready(function () {

    $("button").click(function () {
        var num = $("p.result").text();
        var guess = $("input").val();
        if (guess != num) {
            $("p.result").addClass(".incorrect");
        }
        else {
            $("p.result").addClass(".correct");
        }
    });
});