$(document).ready(function(){
	$('.plus').on('click', function(){
		$(this).css({'display':'none'})
		$(this).next().css({'display':'inline-block'})
		$(this).parent().next().slideToggle(500)
	})
	$('.minus').on('click', function(){
		$(this).css({'display':'none'})
		$(this).prev().css({'display':'inline-block'})
		$(this).parent().next().slideToggle(500)
	})
	$('.bar').on('click',function(){
		$(this).css({'display':'none'})
		$('.close').css({'display':'inline-block'})
		$('.menu_responsive').slideToggle(500)
	})
	$('.close').on('click',function(){
		$(this).css({'display':'none'})
		$('.bar').css({'display':'inline-block'})
		$('.menu_responsive').slideToggle(500)
	})
	$(window).on('scroll',function(){
		if($(this).scrollTop()>=1000){
			$('#back-to-top').css({'display':'flex'})
			$('#back-to-top').fadeIn(1000)
		}
		else{
			$('#back-to-top').fadeOut(1000)
		}
	})
	$('#back-to-top').on('click', function(){
		$('html').animate({
			scrollTop :0
		},800)
	})
	$('.search').on('click',function(){
		$(this).next().toggle(1000);
	})
})