

jQuery(document).ready(function(){
    
    $('#open-menu').click(function(){
        $('nav').slideDown().addClass('closed');
         
    });
    $('#close-menu').click(function(){
        $('nav').slideUp().removeClass('closed');
    });    
    
    $('nav ul a').click(function(e){
        e.preventDefault();
        var distance = 120;
        if($(window).width() < 992){
            distance = 60;    
        }
        if($('nav').hasClass('closed')){
             $('nav').slideUp().removeClass('closed');
        }
        var body = $("html, body");
        var location = $(this).data('target');
        body.animate({scrollTop:$(location).offset().top - distance + 'px'});
    });
    $(document).scroll(function(){
        var bodyDistance = $('html, body').scrollTop() || $('body').scrollTop();
        var distance = 120;
        if($(window).width() < 992){
            distance = 0;    
        }
        var jumbotron = parseInt($('#jumbotron').offset().top - distance);
        var till_storry = parseInt($('#till-story').offset().top - distance);
        var sporting_conn = parseInt($('#sporting-conn').offset().top - distance);
        if( bodyDistance < till_storry){
            $('nav ul a').removeClass('active');
            $('#jumbotron-link').addClass('active');
        }else if(bodyDistance >= till_storry && bodyDistance < sporting_conn){
            $('nav ul a').removeClass('active');
            $('#till-story-link').addClass('active');
        }else if(bodyDistance >= sporting_conn){
            $('nav ul a').removeClass('active');
            $('#sporting-conn-link').addClass('active');
        }
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
             $('nav ul a').removeClass('active');
             $('#chat-ico-link').addClass('active');
        }

    });
    //date
    $('#date-popup input').keyup(function(){
        $('#date-popup .error-msg').hide();
    });
    $('#submit-date').submit(function(e){
        e.preventDefault();
        var day = $("#user-day").val();
        var month = $("#user-month").val();
        var year = $("#user-year").val();
        var age =  18;

        var mydate = new Date();
        mydate.setFullYear(year, month-1, day);

        var currdate = new Date();
        currdate.setFullYear(currdate.getFullYear() - age);
        if(day.trim() != '' && month.trim() != '' && year.trim() != ''){
            
            if(currdate > mydate)
            {
                $('#date-popup').fadeOut();
            }  else{
                $('.error-msg.age').show();
            }  
        }else{
            $('.error-msg.empty').show();
        }
    });
    
    
});
    

