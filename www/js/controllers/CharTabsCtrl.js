angular.module('CharityTabs.controllers', [])

.controller('tabsCtrl', function($scope, $ionicScrollDelegate,$stateParams, charities, stories, $state, $window) {	
	
	$scope.charity = charities.get($stateParams.charityId);
			 $scope.info = false;
			 $scope.projects = true;
			 $scope.news = true;
			 $scope.stories = true;
			 $scope.contact = true;			
			 $scope.activeInit = 1;
		
		$scope.showInfo = function() {
			 $scope.activeInit = 1;
			 $scope.active=0;
			 $scope.info = false;
			 $scope.projects = true;
			 $scope.news = true;
			 $scope.stories = true;
			 $scope.contact = true;		
			$ionicScrollDelegate.scrollTop(true);			 
		};
		$scope.showProj = function() {
			 $scope.active = 2;
			 $scope.activeInit =0;
			 $scope.info = true;
			 $scope.projects = false;
			 $scope.news = true;
			 $scope.stories = true;
			 $scope.contact = true;	
			$ionicScrollDelegate.scrollTop(true);			 
		};
		$scope.showNews = function() {
			 $scope.active = 3;
			 $scope.activeInit =0;
			 $scope.info = true;
			 $scope.projects = true;
			 $scope.news = false;
			 $scope.stories = true;
			 $scope.contact = true;	
			$ionicScrollDelegate.scrollTop(true);			 
		};

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
		$scope.showStories = function() {
			console.log($scope.charity.name);
		$scope.storiesData = stories.getByCharity($scope.charity.name);
		console.log($scope.storiesData);

		$scope.activeInit =0;
			 $scope.active = 4;
			 $scope.info = true;
			 $scope.projects = true;
			 $scope.news = true;
			 $scope.stories = false;
			 $scope.contact = true;
		 $ionicScrollDelegate.scrollTop(true);
		};
		$scope.showContact = function() {
		$scope.activeInit =0;
			 $scope.active = 5;
			 $scope.info = true;
			 $scope.projects = true;
			 $scope.news = true;
			 $scope.stories = true ;
			 $scope.contact = false;
			$ionicScrollDelegate.scrollTop(true);			 
		};
		
		$scope.onDragUp = function(){	

			$ionicScrollDelegate.scrollBottom(true);
			
		};
		$scope.onDragDown = function(){
			$ionicScrollDelegate.scrollBy(0,-10,[true]);
		};
		
});
