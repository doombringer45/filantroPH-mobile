angular.module('starter.storiesCtrl', ['story.services'])

.controller ( 'storiesCtrl', function ( $scope, stories, $window, $timeout, $stateParams, $state ) ) {
	$scope.Math = Math;
	var charities = ['House of Hope', 'Bantay Bata', 'House of joy'];

	$scope.random = function () {
		return charities[Math.floor(Math.random() * charities.length)];
	}
	
	$scope.bookmark = function ( id ) {
		var exist = false;
		var tempBookmark = JSON.parse($window.localStorage['bookmark'] || '[]');
		$window.localStorage.removeItem('bookmark');
		for (var i = 0; i < tempBookmark.length; i++) {
			if(tempBookmark[i] == id) {
				exist = true;
			}
		}
		if( !exist ) {
			tempBookmark.push(id);	
		}
		$window.localStorage['bookmark'] = JSON.stringify(tempBookmark);

		// ionic modal
		// kung dili ma i.close ang modal, mo close automatic in 1.5 secs
		
		// $timeout(function() {
				// Close modal
			// }, 1500);
	}

	$scope.stories = stories.getAll();

	$scope.gotoStoryPost = function ( id ) {
		$state.go('app.story-post', {storyid : id});
	}


	// For story-post

	$scope.story = stories.getSpecific( $stateParams.storyid );
}