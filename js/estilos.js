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
        contacto = $('#contacto').offset().top;

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
    		scrollTop: contacto 
    	}, 500);
    });

    function sleep(ms){
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function dormir() {
      await sleep(8000);
    }


    $('#contactform').submit(function(event){

        $('#campos').hide();
        $('#enviar').hide();
        $('#enviando').show();

        event.preventDefault(); // Evitando la acción por defecto del navegador
        dormir();      // Este llamado no es necesario, es un sleep de 8 segundos.

        $.ajax({
          type: 'POST',
          url: $(this).attr('action'),
          data: $(this).serialize(),
          timeout: 10000,
          success: function(data){
            $('#enviando').hide();
            console.info(data);
            var r = JSON.parse(data); // Decodificando el formato json recibido
            if(r.status=="200"){
              $('#enviado').show();
            }
            else{
              console.log(r.mensaje);
              $('#error').show();
            }
          },

        })

    });


});
