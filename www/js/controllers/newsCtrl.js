angular.module('news.controllers', [])
.controller('NewsCtrl', function($scope, news) {
			$scope.newsArticles = news.all();

			
});
