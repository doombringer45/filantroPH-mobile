angular.module('starter.storiesCtrl', ['story.services'])

.controller( 'storiesCtrl', function ( $scope, stories, $window, $timeout, $stateParams, $state ) {
	$scope.Math = Math;
	$scope.stories = stories.getAll();
	
	var charities = ['House of Hope', 'Bantay Bata', 'House of joy'];
	
	$scope.charity = ['House of Joy'];
	
	for(var i = 0; i < $scope.stories.length; i++){
		var temp = charities[Math.floor(Math.random() * charities.length)];
		$scope.charity.push(temp);
	}
	
	$scope.bookmark = function ( id ) {
		var tempBookmark = JSON.parse($window.localStorage['bookmark'] || '[]');
		$window.localStorage.removeItem('bookmark');
		tempBookmark.push(id);
		$window.localStorage['bookmark'] = JSON.stringify(tempBookmark);
		console.log(tempBookmark);
		// ionic modal
		// kung dili ma i.close ang modal, mo close automatic in 1.5 secs
		
		// $timeout(function() {
				// Close modal
			// }, 1500);
	}


	$scope.gotoStoryPost = function ( id ) {
		$state.go('app.story-post', {storyid : id});
	}


	// For story-post

	$scope.story = stories.getSpecific( $stateParams.storyid );
})