$(document).ready(function(){
	
     if( $(window).width() > 800 ) {

        // EFECTO MENU
       $('.menu a').each(function(index, element){
       	$(this).css({
       		'top':'-200px'
       	});
        
        $(this).animate({
        	top: '0'
        }, 2000 + (index * 500));
        });

        // EFECTO HEADER
    	$('header .texto').css({
    		opacity:0,
    		margintop:0
    	});
    	$('header .texto').animate({
    		opacity:1,
    		margintop: '-52'
    	},1500 );

    }   
    // SCROLL DEL MENU
    var acercaDe = $('#acerca-de').offset().top,
        menu = $('#servicios').offset().top,
        galeria = $('#galeria').offset().top,
        ubicacion = $('#ubicacion').offset().top;

    $('#btn-acerca-de').on('click', function(e){
    	e.preventDefault();
    	$('html, body').animate({
    		scrollTop: acercaDe - 150
    	}, 500);
    });
    $('#btn-menu').on('click', function(e){
    	e.preventDefault();
    	$('html, body').animate({
    		scrollTop: menu 
    	}, 500);
    });
    $('#btn-galeria').on('click', function(e){
    	e.preventDefault();
    	$('html, body').animate({
    		scrollTop: galeria 
    	}, 500);
    });
    $('#btn-ubicacion').on('click', function(e){
    	e.preventDefault();
    	$('html, body').animate({
    		scrollTop: ubicacion 
    	}, 500);
    });

});
