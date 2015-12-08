angular.module('starter.storiesCtrl', ['story.services'])

.controller ( 'storiesCtrl', function ( $scope, stories, $window, $timeout ) ) {
	$scope.Math = Math;
	var charities = ['House of Hope', 'Bantay Bata', 'House of joy'];

	$scope.random = function () {
		return charities[Math.floor(Math.random() * charities.length)];
	}
	
	$scope.bookmark = function ( id ) {
		var tempBookmark = JSON.parse($window.localStorage['bookmark'] || '[]');
		$window.localStorage.removeItem('bookmark');
		tempBookmark.push(id);
		$window.localStorage['bookmark'] = JSON.stringify(tempBookmark);

		// ionic modal
		// kung dili ma i.close ang modal, mo close automatic in 1.5 secs
		
		// $timeout(function() {
				// Close modal
			// }, 1500);
	}

	$scope.stories = stories.getAll();
}