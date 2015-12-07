angular.module('news.services', [])

.factory('news', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var newsArticles = [{
		id: 0,
		title: 'Ben Sparrow',
		thumbnail: 'img/charity2.jpg',
		TeaserText: 'The quick brown fox jumps over the lazy dog',
		date: 'September 4, 2015'
	},
		{
		id: 1,
		title: 'jack Sparrow',
		thumbnail: 'img/163.jpg',
		TeaserText: 'The quick brown fox jumps over the lazy dog',
		date: 'September 3, 2015'
	},
		{
		id: 2,
		title: 'Peter Sparrow',
		thumbnail: 'img/kid.jpg',
		TeaserText: 'The quick brown fox jumps over the lazy dog',
		date: 'September 2, 2015'
	},
		{
		id: 3,
		title: 'Captain Sparrow',
		thumbnail: 'img/gsk.jpg',
		TeaserText: 'The quick brown fox jumps over the lazy dog',
		date: 'September 1, 2015'
	}];

  return {
    all: function() {
      return newsArticles;
    }
  };
});