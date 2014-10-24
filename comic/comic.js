$(document).on('ready', function(){
	$('.tallyList').hide();
	var tallyFb = new Firebase("https://intense-inferno-2612.firebaseio.com/"),
		firstTime = true;

	$('#drbutton').on('click', function(){
		tallyFb.once('value', function(dataSnapshot) {
			var tallies = dataSnapshot.val(),
				keys = Object.keys(tallies),
				randomKey = Math.floor(Math.random() * keys.length);
			if (firstTime) {
				for (var i = 0; i < keys.length; i++) {
					$('.tallyList').append('<li>' + keys[i] + ": " + tallies[keys[i]] + '</li>');
				};
				firstTime = false;	
			};
			tallies[keys[randomKey]]++;
			$('.tallyList li').eq(randomKey).text(keys[randomKey] + " : " + tallies[keys[randomKey]])
			tallyFb.set(tallies);
		});
		$('.tallyList').show();
	});    
});