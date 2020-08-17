$(document).ready(function() {
    var interval = setInterval(function() {
        var momentNow = moment();
        $("#date-part").html(momentNow.format("dddd").substring(0, 8).toUpperCase() + "  " + momentNow.format("MMMM DD YYYY"));
        $("#time-part").html(momentNow.format("hh:mm:ssa"));
    }, 100);
});

// $(document).ready(function (){
//     var openModal;
//     $("modal-btn-7").on("click", function (){
//         event.preventDefault();
//         openModal = $()
//     })
// })

$(function() {
    $("#modal-btn7").on("click", function() {
        var src = $(this).attr("src");
        $('#workModal7').prop("src", src);
    });
})