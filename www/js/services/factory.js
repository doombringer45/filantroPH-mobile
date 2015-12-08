angular.module('story.services', [])
.factory('stories', function() {
	
	var stories = [
			{
				id : 0,
				title : 'Lorem ipsum dolor',
				charity : 0,
				img : 'img/camp1.jpg',
				desc : 'The quick brown fox jumps over the lazy dog.',
				content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				datetime : 'September 8, 2015 8:39:00 PM',
				state : 'Top',
				views : 120,
				loves : 98,
				shares : 50
				},
			{
				id : 0,
				title : 'Lorem ipsum dolor',
				charity : 0,
				img : 'img/camp1.jpg',
				desc : 'The quick brown fox jumps over the lazy dog.',
				content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				datetime : 'September 8, 2015 8:39:00 PM',
				state : 'Trending',
				views : 500,
				loves : 500,
				shares : 100
			},
			{
				id : 0,
				title : 'Lorem ipsum dolor',
				charity : 0,
				img : 'img/camp1.jpg',
				desc : 'The quick brown fox jumps over the lazy dog.',
				content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				datetime : 'September 8, 2015 8:39:00 PM',
				state : 'Fresh',
				views : 1020,
				loves : 998,
				shares : 80
			},
			{
				id : 0,
				title : 'Lorem ipsum dolor',
				charity : 0,
				img : 'img/camp1.jpg',
				desc : 'The quick brown fox jumps over the lazy dog.',
				content : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
							tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
							quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
							consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
							cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
							proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
				datetime : 'September 8, 2015 8:39:00 PM',
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
			getById : function ( ids ) {
				var response =[];
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