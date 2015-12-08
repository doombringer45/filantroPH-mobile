// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ion-sticky',
							'starter.services','news.services' ,'following.services','charity.services','subCat.services',
							'starter.controllers','news.controllers','following.controllers', 
							'subCategory.controllers','CharityTabs.controllers','Profile.controllers','uiGmapgoogle-maps'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  
	.state('signup', {
    url: '/signup',
    templateUrl: 'templates/sign-up.html',
	controller: 'AppCtrl'
   })

  .state('app', {
	url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
     controller: 'AppCtrl'
})

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })
  
	.state('app.map', {
    url: '/map',
    views: {
      'menuContent': {
        templateUrl: 'templates/charity-map.html',
		controller: 'AppCtrl'
      }
    }
  })
		
	.state('app.categories', {
      url: '/categories',
      views: {
        'menuContent': {
          templateUrl: 'templates/categories.html'
        }
      }
    })
	
		.state('app.stories', {
      url: '/stories',
      views: {
        'menuContent': {
          templateUrl: 'templates/stories.html'
        }
      }
    })
	
		.state('app.news', {
      url: '/news',
      views: {
        'menuContent': {
          templateUrl: 'templates/news.html',
		   controller: 'NewsCtrl'
        }
      }
    })
	
		.state('app.campaigns', {
      url: '/campaigns',
      views: {
        'menuContent': {
          templateUrl: 'templates/campaigns.html'
        }
      }
    })
	.state('app.subcat', {
      url: '/subcat',
      views: {
        'menuContent': {
          templateUrl: 'templates/subcat.html',
		  controller:'subCatCtrl'
	
        }
      }
    })
	
	.state('app.charitypage', {
      url: '/charitypage/:charityId',
      views: {
        'menuContent': {
          templateUrl: 'templates/charitypage.html',
		  controller: 'tabsCtrl'
        }
      }
    })
	
	.state('app.donation', {
      url: '/donation',
      views: {
        'menuContent': {
          templateUrl: 'templates/donation.html'
        }
      }
    })
	
	.state('app.story-post', {
      url: '/story-post',
      views: {
        'menuContent': {
          templateUrl: 'templates/story-post.html'
        }
      }
    })
	
  .state('app.following', {
      url: '/following',
      views: {
        'menuContent': {
          templateUrl: 'templates/following.html',
		  controller: 'followingCtrl'
        }
      }
    })
	.state('app.profile', {
      url: '/profile',
      views: {
        'menuContent': {
          templateUrl: 'templates/profile.html',
		  controller: 'profileCtrl'
        }
      }
    })
	
	.state('app.settings', {
      url: '/settings',
      views: {
        'menuContent': {
          templateUrl: 'templates/settings.html'
        }
      }
    })
	
    .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
        
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
