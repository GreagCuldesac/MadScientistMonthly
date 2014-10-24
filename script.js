$(document).ready(function() {
    var leds = [
        "#bton1",
        "#bton2",
        "#bton3" 
        ]
  
    $("#online").hide();
    var led1 = leds[Math.floor(Math.random()*leds.length)];
    var led2 = 0;
    var led3 = 0;
    
      
    $('div').click(function() {
       if ($(this).is(led1)){
          $('div.ledon').filter(lightson).toggleClass('active');
	  var led2 = leds[Math.floor(Math.random()*leds.length)];
       } else {
	  $('.ledon').toggleClass('ledoff');
       }
	
    $('div').click(function() {
       if ($(this).is(led2)){
          $('div.ledon').filter(lightson).toggleClass('active');
	  var led3 = leds[Math.floor(Math.random()*leds.length)];
       } else {
	  $('.ledon').toggleClass('ledoff');
       }
	
    $('div').click(function() {
       if ($(this).is(led3)){
          $('div.ledon').filter(lightson).toggleClass('active');
	  $("#online").show();
       } else {
	  $('.ledon').toggleClass('ledoff');
       }
	
    }); 
   
}); 
