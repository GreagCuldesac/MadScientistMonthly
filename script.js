$(document).ready(function() {
    var leds = [
        "#bton1",
        "#bton2",
        "#bton3" 
        ]
    var lightson = leds[Math.floor(Math.random()*leds.length)];
    var test = ".ledon";
    
    $('div').click(function() {
       if ($(this).is(lightson)){
<<<<<<< HEAD
          $('div.ledon').filter(lightson).toggleClass('.active');
=======
          $('div.ledon').filter(lightson).toggleClass('active');
>>>>>>> origin/master
       }
    }); 
}); 
