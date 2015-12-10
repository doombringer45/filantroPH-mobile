angular.module('story.services', [])
.factory('stories', function() {
	
	var stories = [
			{
				id : 0,
				title : 'Everyone Has a Story in Life',
				charity : 'House of Hope',
				img : 'img/camp1.jpg',
				desc : 'The quick brown fox jumps over the lazy dog.',
				content : 'A 24 year old boy seeing out from the train’s window shouted	“Dad, look the trees are going behind!”		Dad smiled and a young couple sitting nearby, looked at the 24 year old’s childish behavior with pity, suddenly he again exclaimed… “Dad, look the clouds are running with us!”	The couple couldn’t resist and said to the old man…“Why don’t you take your son to a good doctor?”The old man smiled and said…“I did and we are just coming from the hospital, my son was blind from birth, he just got his eyes today.	Every single person on the planet has a story. Don’t judge people before you truly know them. The truth might surprise you.',
				datetime : '9:00 AM GMT+8 12/19/15',
				state : 'Top',
				views : 120,
				loves : 98,
				shares : 50
				},
			{
				id : 0,
				title : 'Lorem ipsum dolor',
				charity : 'Bantay Bata',
				img : 'img/camp1.jpg',
				desc : 'The quick brown fox jumps over the lazy dog.',
				content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				datetime : '9:00 AM GMT+8 12/19/15',
				state : 'Trending',
				views : 500,
				loves : 500,
				shares : 100
			},
			{
				id : 0,
				title : 'Lorem ipsum dolor',
				charity : 'Gugma sa kabataan',
				img : 'img/camp1.jpg',
				desc : 'The quick brown fox jumps over the lazy dog.',
				content :  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				datetime : '9:00 AM GMT+8 12/19/15',
				state : 'Fresh',
				views : 1020,
				loves : 998,
				shares : 80
			},
			{
				id : 0,
				title : 'Lorem ipsum dolor',
				charity : 'House of Joy',
				img : 'img/camp1.jpg',
				desc : 'The quick brown fox jumps over the lazy dog.',
				content :  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat nonproident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				datetime : '9:00 AM GMT+8 12/19/15',
				state : 'Fresh',
				views : 1200,
				loves : 998,
				shares : 56
			}
		];

		return {
			getAll : function () {
				return stories;
			},
			getSpecific : function ( id ) {
				for (var i = 0; i < stories.length; i++) {
					if ( id == stories[i].id ) {
						return stories[i];
					}
				}
				return null;
			},
			getById : function ( ids ) {
				var response = [];
				for (var i = 0; i < stories.length; i++) {
					if ( ids.indexOf(stories[i].id) ) {
						response.push(stories[i]);
					}
				}
				return response;
			},
			getBySate : function ( state ) {
				var response = [];
				for (var i = 0; i < stories.length; i++) {
					if ( state == stories[i].state ) {
						response.push(stories[i]);
					}
				}
				return response;

			}
		}


	})