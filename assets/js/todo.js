//strike through effect
$('ul').on('click','li',function(){
	$(this).toggleClass("completed");
});
//click on X to delete
$('ul').on('click','span',function(event){
	$(this).parent().fadeOut(1000,function(){
		$(this).remove();
	});
	//Avoid Event bubbling
	event.stopPropagation();
	});
$("input[type='text").keypress(function(event){
	if(event.which===13){
		var newTodo=$(this).val();
		$(this).val('');
		$('ul').append("<li><span><i class='fas fa-trash-alt'></i></span>"+newTodo+"</li>");
	}
});
// $(".fa-plus-square").click(function(){
// 	$("input[type='text'").fadeToggle();