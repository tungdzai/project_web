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
	$('.search').on('click',function(){
		$(this).next().toggle(1000);
	})

})

/*số lượng sản phẩm */
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
/*mouseover */

var colorList= document.querySelectorAll('.product>.colors> .color_selector');
for (var i = 0; i < colorList.length; i++) {
	colorList[i].onmouseover= function(){
	var mainImg=document.querySelector('.product>.mainpicture');
	mainImg.src=this.src;
	}
}
