angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $ionicPopup, $state, UserList, home, stories) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};
  $scope.SignUpData= {};
  
  //signUp function
  
  $scope.doSignUp = function(){
		console.log("Entering Signup");
    var registerThis = UserList.register($scope.SignUpData);

    if(registerThis){
      console.log("Registration Successfull");
      $scope.login();
      $ionicPopup.alert({
                  title: 'Registration Successfull!'
              });
			  
			  console.log(registerThis);
    }
    else{
       $ionicPopup.alert({
                  title: 'Failed to Register! Please Try Again!'
              });
    }
  };
  
  //checks if there is no user logged in, modal will pop out
  showLoginOnNullUser = function () {
    if (!$scope.currentUser)
        $scope.login();
	};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
	//showLoginOnNullUser();
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };
  

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };
  
  
	$scope.logout =function() {
	 $scope.modal.show();
	};

  // Perform\ the login action when the user submits the login form
  $scope.doLogin = function() {
   // console.log('Doing login', $scope.loginData);
	$scope.stat= UserList.authenticate($scope.loginData.email, $scope.loginData.password);
	
	
	if($scope.stat==true){
		$scope.modal.hide();
		$state.go('app.home');
		
		 $timeout(function() {
			$scope.closeLogin();
					}, 1000);
		}
	else{
		
		$ionicPopup.alert({
			title: 'user does not exist'
		});
	}
  };
  
  $scope.homeSlider = home.getSlider();
  $scope.FeaturedNews = home.getFeaturedNews();
  $scope.FeaturedStory = stories.getAll();
  $scope.campaignSlider = home.getCampaigns();
  
  
});	


