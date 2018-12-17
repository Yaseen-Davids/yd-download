$(document).ready(function(){

    $(".modal_btn").on('click', function(){

        var btnModal = $(this).data("modal");
        var modal = $(".modal_wrapper");
        var modalBox = "." + btnModal;

        if (modal.hasClass(btnModal)){
            $(modalBox).fadeIn();
        }
        else{
            console.log("You done something wrong, check if 'modal_wrapper' has 'modal_#' as a class");
        }

    });

    $(".cancel_btn").on('click', function(){
        var modal = $(".modal_wrapper").fadeOut();
    })

})