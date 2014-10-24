$(document).ready(function() {
    var leds = [
        "#bton1",
        "#bton2",
        "#bton3" 
        ]
    var allon = 0;
    $("#online").hide();
    var led1 = leds[Math.floor(Math.random()*leds.length)];
    
      
    $('div').click(function() {
       if ($(this).is(led1)){
          $('div.ledon').filter(lightson).toggleClass('active');
	  allon=allon+1;
		var led2 = leds[Math.floor(Math.random()*leds.length)];
       } else {
	  $('.ledon').toggleClass('ledoff');
       }
	if (allon === 7){
	 $("#online").show();
	}

    $('div').click(function() {
       if ($(this).is(led2)){
          $('div.ledon').filter(lightson).toggleClass('active');
	  allon=allon+2;
		 var led4 = leds[Math.floor(Math.random()*leds.length)];
       } else {
	  $('.ledon').toggleClass('ledoff');
       }
	if (allon === 7){
	 $("#online").show();
	}

    $('div').click(function() {
       if ($(this).is(led4)){
          $('div.ledon').filter(lightson).toggleClass('active');
	  allon=allon+4;
       } else {
	  $('.ledon').toggleClass('ledoff');
       }
	if (allon === 7){
	 $("#online").show();
	}
    }); 
   
}); 
