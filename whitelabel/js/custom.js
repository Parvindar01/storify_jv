// javascript

$(document).ready(function(){  
 
    
    // ontopscroll
    $(document).on('click','.jv_up',function(){
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    })

    

});
// $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
//     if (scroll >= 100) {
//         $(".jv_header_wrapper").addClass("fixedHeader");
//     }else{
//         $(".jv_header_wrapper").removeClass("fixedHeader");
//     }
// }); 
