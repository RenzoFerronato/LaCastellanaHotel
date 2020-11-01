/*$(document).ready(function(){
    var altura = $('.menu').offset().top;
    
    $(window).on('scroll', function(){
        if ( $(window).scrollTop() > altura ){
            $('.menu').addClass('menu-fixed');
        } else {
            $('.menu').removeClass('menu-fixed');
        }
    });

    $(window).scroll(function(){
		var windowWidth = $(window).width();

		if(windowWidth > 200)
			var scroll = $ (window).scrollTop();

		$('header .mobile').css({
			'transform': 'translate(position.fixed)'
		});

		
		
	});
 
});*/
$(document).ready(main);
 
var contador = 1;
 
function main(){
	$('.mobile').click(function(){
		// $('nav').toggle(); 
 
		if(contador == 1){
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
 
	});
 
};
