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
          $('div.ledon').filter(lightson).animate({
backgroundColor: "#000000",
color: "#000",
width: 50
}, 102 );
       }
    }); 
}); 
