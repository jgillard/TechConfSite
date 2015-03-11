$("#toggleSpeaker1").click(function() {
            $("#Speaker1Bio").slideToggle("slow");  
            if($(this).hasClass("more")) {
            $(this).removeClass("more");
            $(this).html('<i class="fa fa-arrow-up" id="Speaker1ReadMore"></i> Read Less...');
            $(this).addClass("less");
            } else {
            $(this).removeClass("less");
            $(this).html('<i class="fa fa-arrow-down" id="Speaker1ReadMore"></i> Read More...');
            $(this).addClass("more");
            }
});  
$("#toggleSpeaker2").click(function() {
            $("#Speaker2Bio").slideToggle("slow");  
            if($(this).hasClass("more")) {
            $(this).removeClass("more");
            $(this).html('<i class="fa fa-arrow-up" id="Speaker2ReadMore"></i> Read Less...');
            $(this).addClass("less");
            } else {
            $(this).removeClass("less");
            $(this).html('<i class="fa fa-arrow-down" id="Speaker2ReadMore"></i> Read More...');
            $(this).addClass("more");
            }
});
$("#toggleSpeaker3").click(function() {
            $("#Speaker3Bio").slideToggle("slow");  
            if($(this).hasClass("more")) {
            $(this).removeClass("more");
            $(this).html('<i class="fa fa-arrow-up" id="Speaker3ReadMore"></i> Read Less...');
            $(this).addClass("less");
            } else {
            $(this).removeClass("less");
            $(this).html('<i class="fa fa-arrow-down" id="Speaker3ReadMore"></i> Read More...');
            $(this).addClass("more");
            }
    });        