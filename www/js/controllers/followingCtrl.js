angular.module('following.controllers', [])
.controller('followingCtrl', function($scope,$stateParams, MyCharities, charities) {
			$scope.MyCharityList = MyCharities.getList();
		
});
