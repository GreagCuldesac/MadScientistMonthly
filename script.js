$(document).ready(function() {
    var leds = [
        "#bton1",
        "#bton2",
        "#bton3" 
        ]
    var allon = 0;
    $("#online").hide();
    var lightson = leds[Math.floor(Math.random()*leds.length)];
<<<<<<< HEAD
=======
      
>>>>>>> origin/master
    $('div').click(function() {
       if ($(this).is(lightson)){
          $('div.ledon').filter(lightson).toggleClass('active');
	  allon++;
	  alert(allon);
       } else {
	  $('.ledon').toggleClass('ledoff');
       }
    }); 
    
<<<<<<< HEAD
=======
    if (allon === "4"){
	$("#online").show();
 	}
>>>>>>> origin/master
}); 
