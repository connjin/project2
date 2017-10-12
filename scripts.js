$(document).ready(function() {
	$('#fullpage').fullpage( {
		//navigation
		menu: '#menu',
		lockAnchors: false, 
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage'], 
		navigation: true, 
		navigationPosition: 'right', 
		navigationTooltips: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage', 'seventhPage', 'eighthPage', 'ninthPage'],
		showActiveTooltip: true, 
		slidesNavigation: true, 
		slidesNavPosition: 'bottom', 

		//accessibility
		keyboardScrolling: true,

		//design
		verticalCentered: false, 
		responsiveWidth: 0, 
		responsiveHeight: 0,
	}); 
})

$('#fullpage').fullpage( {
	sectionsColor: ['#000', '#24272C','#2B2D42', '#6D101C', '#000', '#000', '#24272C', '#2B2D42', '#6D101C'],
}); 

$('#k-quote').typeIt( {
	strings: '"I am not going to show pride in flag for a country that oppresses black people and people of color. To me, this is bigger than football and it would be selfish on my part to look the other way. There are bodies in the street and people getting paid leave and getting away with murder."', 
	speed: 50, 
	autoStart: true
})