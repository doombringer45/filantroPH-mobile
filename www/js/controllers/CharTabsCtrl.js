angular.module('CharityTabs.controllers', [])

.controller('tabsCtrl', function($scope, $ionicScrollDelegate,$stateParams, charities) {	
	
	$scope.charity=charities.get($stateParams.charityId);
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
		$scope.showStories = function() {
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
