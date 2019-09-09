$(document).ready(()=>{
	$("input").focus(function(){
		$(this).addClass("colored-border")
	})
	$("input").focusout(function(){
		$(this).removeClass("colored-border")
	})
	$("form").submit(()=>{
		alert("Login successful")
	})
	$("form").submit((event)=>{
		event.preventDefault();
	})
})