$("#btn-career").click(function() {
    $("#career").css('display', 'unset');
    $("body").css('overflow','hidden');
});
$("#career-close").click(function(){
    $("#career").css('display', 'none');
    $("body").css('overflow','unset');
});