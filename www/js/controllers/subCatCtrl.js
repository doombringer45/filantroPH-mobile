angular.module('subCategory.controllers', [])
.controller('subCatCtrl', function($scope, subCatList) {
		$scope.lists=subCatList.all();
		
});
