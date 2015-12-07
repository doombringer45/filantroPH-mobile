angular.module('Profile.controllers', [])

.controller('profileCtrl', function($scope) {	
		$scope.about=false;
		$scope.history=true;
		$scope.Bookmark=true;
		$scope.activeInit=1;
		$scope.active=0;
		
	 $scope.showAbout=function(){
		$scope.activeInit=1;
		$scope.active=0;
		$scope.history=true;
		$scope.Bookmark=true;
		$scope.about=false;
		};
		
	$scope.showHistory=function(){
		 $scope.active = 2;
		$scope.activeInit =0;
		$scope.history=false;
		$scope.Bookmark=true;
		$scope.about=true;
		};
		
	$scope.showBookmark=function(){
		 $scope.active = 3;
		$scope.activeInit =0;
		$scope.history=true;
		$scope.Bookmark=false;
		$scope.about=true;
		};
		
});