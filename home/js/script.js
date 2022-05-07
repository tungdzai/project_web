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
	$('.acc').on('click',function(){
		$(this).next().toggle()
	})

})
 var countDownDate = new Date("May 15, 2022 0:0:0").getTime();
      var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("demo").innerHTML = days + "Ngày " + hours + "Giờ "
        + minutes + "Phút " + seconds + "Giây ";
        if (distance < 0) {
          clearInterval(x);
          document.getElementById("demo").innerHTML = "Thời gian falsh sale đã kết thúc";
        }
      }, 1000);


$('.btn-number').click(function(e){
    e.preventDefault();
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            } 
		} else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
        }
        if(parseInt(input.val()) == input.attr('max')) {
            $('.pluss').attr('disabled', true);
        }else if(parseInt(input.val()) == input.attr('min')) {
            $('.minuss').attr('disabled', true);
        }else {
        	 $('.pluss ,.minuss').attr('disabled', false);
        }
    } else {
        input.val(0);
    }
});
$('.input-number').focusin(function(){
   $(this).data('oldValue', $(this).val());
});
$('.input-number').change(function() {
    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the minimum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled')
    } else {
        alert('Sorry, the maximum value was reached');
        $(this).val($(this).data('oldValue'));
    }
    
    
});
    var checkall = document.getElementById('checkall');
    checkall.addEventListener('click', function(){
      var input = document.querySelectorAll('.input-group-addon input');
      for(var i = 0; i < input.length; i++){
        input[i].checked = true;
      }
    })