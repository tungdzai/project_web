$(document).ready(function(){
	$('#blog_new').on('click',function(){
		$(this).nextAll().children().toggle(400);
	})
	$('.blogs_ctg').on('click',function(){
		$(this).nextAll().toggle(400);
	})
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
	$('.acc').on('click',function(){
		$(this).next().toggle()
	})
	$('.category-btn').on('click',function(){
		$(this).next().toggle(400);
	})
	/*$('.category-btn').on('click',function(){
	$(this).next().addclass('.category-active')
	})*/

})

var sub= document.getElementById('btn-login');
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   	return re.test(String(email).toLowerCase());
}
function isVietnamesePhoneNumber(number) {
	 return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number);
}
sub.addEventListener('click', function() {
	var input_email= document.getElementById('email');
		if (input_email.value ==='') {
			document.getElementsByClassName('text-muted')[0].style.display='none';
			document.getElementsByClassName('error_email')[0].innerText='Yêu cầu nhập lại email !';
			document.getElementsByClassName('error_email')[0].style.display='block';
			document.getElementsByClassName('error_email')[0].style.color='red';
		}else if( !validateEmail(input_email.value)){
			document.getElementsByClassName('text-muted')[0].style.display='none';
			document.getElementsByClassName('error_email')[0].innerText='Email không đúng định dạng !';
			document.getElementsByClassName('error_email')[0].style.display='block';
			document.getElementsByClassName('error_email')[0].style.color='red';

		}else{
			document.getElementsByClassName('error_email')[0].innerText='';
			document.getElementsByClassName('error_email')[0].style.display='none';
		}
		var input_name=document.getElementById('full_name');;
		if (input_name.value === '') {
			document.getElementsByClassName('text-muted')[0].style.display='none';
			document.getElementsByClassName('error_name')[0].innerText='Nhập đầy đủ họ và tên';
			document.getElementsByClassName('error_name')[0].style.display='block';
			document.getElementsByClassName('error_name')[0].style.color='red';
		}
		else if (input_name.value.length <= 8) {
			document.getElementsByClassName('text-muted')[0].style.display='none';
			document.getElementsByClassName('error_name')[0].innerText='Tên chưa đúng định dạng';
			document.getElementsByClassName('error_name')[0].style.display='block';
			document.getElementsByClassName('error_name')[0].style.color='red';
		}else{
			document.getElementsByClassName('error_name')[0].innerText='';
			document.getElementsByClassName('error_name')[0].style.display='none';
		}

		var input_text=document.getElementById('textarea');;
		if (input_text.value === '') {
			document.getElementsByClassName('text-muted')[0].style.display='none';
			document.getElementsByClassName('error_textarea')[0].innerText='Điền đầy đủ nội dung!';
			document.getElementsByClassName('error_textarea')[0].style.display='block';
			document.getElementsByClassName('error_textarea')[0].style.color='red';
		}
		else if (input_name.value.length <= 15) {
			document.getElementsByClassName('text-muted')[0].style.display='none';
			document.getElementsByClassName('error_textarea')[0].innerText='Điền đầy đủ nội dung!';
			document.getElementsByClassName('error_textarea')[0].style.display='block';
			document.getElementsByClassName('error_textarea')[0].style.color='red';
		}else{
			document.getElementsByClassName('error_textarea')[0].innerText='';
			document.getElementsByClassName('error_textarea')[0].style.display='none';
		}
})


