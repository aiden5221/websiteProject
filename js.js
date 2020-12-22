$(document).ready(function() {

    $("#itm1").hover(function() {
            $(".img1-text").children().css("visibility", "visible");
        },
        function() {
            $(".img1-text").children().css("visibility", "hidden");
        })

    $("#itm2").hover(function() {
            $(".img2-text").children().css("visibility", "visible");
        },
        function() {
            $(".img2-text").children().css("visibility", "hidden");
        })

    $("#itm3").hover(function() {
            $(".img3-text").children().css("visibility", "visible");
        },
        function() {
            $(".img3-text").children().css("visibility", "hidden");
        })

    $("#itm4").hover(function() {
            $(".img4-text").children().css("visibility", "visible");
        },
        function() {
            $(".img4-text").children().css("visibility", "hidden");
        })

})