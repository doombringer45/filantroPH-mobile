angular.module('charity.services', [])
.factory('charities', function() {
	var charity = [{
		id:0,
		name:'Gugma sa Kabataan',
		street:'Hayes Street, Capistrano',
		city:'Cagayan de Oro City',
		zip: 9000,
		state:'Misamis Oriental',
		country:'PH',
		logo:'img/gsk.jpg',
		video:'videos/meow.mp4',
		about:'Gugma sa Kabataan is a charity that helps street children, the marginalized and children who cannot afford to go to school',
		mission:' Working with the street children in providing opportunities to be integrated in family, school and labor.',
		vision:' An empowering place for street children to enjoy survival, development, protection and participation towards a transforming community with HOPE, FAITH and LOVE.',
		currentProjectTitle:'Anti Animal Abuse',
		currProjDetails:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer.',
		currProjStart:'August 1, 2015',
		currProjEnd:'December 1, 2015',
		currProjImage:'img/camp4.jpg'
	},
	{
		id:1,
		name:'Bantay Bata 163',
		street:'Bulua Street, Bulua',
		city:'Cagayan de Oro City',
		zip: 9000,
		state:'Misamis Oriental',
		country:'PH',
		logo:'img/163.jpg',
		video:'videos/meow.mp4',
		about:'jQuery takes a lot of common tasks that requires many lines 	of JavaScript code to accomplish, and wraps it into methods that you can call with a single	line of code.',
		mission:'jQuery takes a lot of common tasks that requires many lines 	of JavaScript code to accomplish, and wraps it into methods that you can call with a single	line of code.',
		vision:'jQuery takes a lot of common tasks that requires many lines 	of JavaScript code to accomplish, and wraps it into methods that you can call with a single	line of code.',
		currentProjectTitle:'Help a child',
		currProjDetails:'This is a "Facebook" styled Card. The header is created from a Thumbnail List item, the content is from a card-body consisting of an image and paragraph text. The footer consists of tabs, icons aligned left, within the card-footer.',
		currProjStart:'August 1, 2015',
		currProjEnd:'December 1, 2015',
		currProjImage:'img/give.jpg'
	}];
	
	
	return {
		get: function(charityId) {
			for (var i = 0; i < charity.length; i++) {
        if (charity[i].id === parseInt(charityId)) {
          return charity[i];
        }
      }
	  return null;
	 }
	};
});