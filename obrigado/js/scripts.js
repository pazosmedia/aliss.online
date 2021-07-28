$.get("https://ssl.geoplugin.net/json.gp?k=292af9fb00c1353d", function (resp) {
    var data = JSON.parse(resp);
    $("#location").html(data.geoplugin_city);
});

$(document).ready(function() { 

    if (jQuery(window).width() < 480){

        $('#desk_show').hide();
        $('#mobile_show').show();

        $('.hero').parallax({
            imageSrc: 'img/bg-top-mobile.png',
            naturalWidth: 600,
            naturalHeight: 400
        });
        
        setTimeout(function() { 
            $('#button_chechout_hero_mobile').show(); 
            $('#button_chechout_final').show(); 
     }, 1570  * 1 * 1000); 
    }
    
    if (jQuery(window).width() > 480){

        $('#desk_show').show();
        $('#mobile_show').hide();
        
        $('.hero').parallax({
            imageSrc: 'img/bg-top.png',
            naturalWidth: 600,
            naturalHeight: 400
        });

        setTimeout(function() { 
            $('#button_chechout_hero').show(); 
            $('#button_chechout_final').show(); 
     }, 1570  * 1 * 1000); 
    }

    
});

