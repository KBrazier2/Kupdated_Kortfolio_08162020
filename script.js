$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $("#date-part").html(momentNow.format("dddd").substring(0, 8).toUpperCase() + "  " + momentNow.format("MMMM DD YYYY"));
        $("#time-part").html(momentNow.format("hh:mm:ssa"));
    }, 100);
});