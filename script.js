$(document).ready(function() {
    var leds = [
        "#bton1",
        "#bton2",
        "#bton3" 
        ];
    var led1 = leds[Math.floor(Math.random()*leds.length)];
    var led2 = "nope";
    var led3 = "nope"; 
	
    $("#online").hide();
    alert(led1);  
    $('div').click(function() {
       if ($(this).is(led1)){
			$('div.ledon').filter(led1).toggleClass('active');
			var ex = leds.indexOf(led1);
			leds.splice(ex,1);
			led2 = leds[Math.floor(Math.random()*leds.length)]; 
	   } else {
			$('.ledon').toggleClass('ledoff');
	   }
	});
	$('div').click(function() {
       if ($(this).is(led2)){
			$('div.ledon').filter(led2).toggleClass('active');
			ex = leds.indexOf(led2);
			leds.splice(ex,1);
			led3 = leds[Math.floor(Math.random()*leds.length)]; 
	   } else {
			$('.ledon').toggleClass('ledoff');
	   }
	});	
	$('div').click(function() {
       if ($(this).is(led3)){
			$('div.ledon').filter(led3).toggleClass('active');
			$('#online').show();
	   } else {
			$('.ledon').toggleClass('ledoff');
	   }
	});	
}); 