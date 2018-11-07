$(document).ready(function () {

    $('.navBar li').click(function(){
        var a = $(this).attr("data-target");
        $('.panelForm').hide();
        $('.' + a).show();
        // hide sidebar
        $('#sidebar').removeClass('active');
        // hide overlay
        $('.overlay').removeClass('active');
    });

});