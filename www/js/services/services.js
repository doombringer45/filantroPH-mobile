angular.module('starter.services', [])
.factory('UserList', function(){

	var users = [{
	
		id: 0,
		email: 'meow@meow.com',
		password:'12345'
	
	},
	{
		id: 0,
		email: 'zyra@puppy.com',
		password:'0000'
		
	}];
	
	return{
		authenticate: function(user_email, user_pass){
			 for (var i = 0; i < users.length; i++) {
				if (users[i].email == user_email && users[i].password == user_pass) {
			
				return true;
					}	
			}
			return null;
		},
		
		getUsers: function() {
			return users;
		},
		
		register: function(thisUser){
			var tempid = users[users.length - 1].id + 1;
			thisUser.id = tempid;
			if(users.push(thisUser)){
				return users;
			}
			return null;
			
		}
	};

})

.factory('home', function(){

	var homeSlider=[{
		
		id: 0,
		img: 'img/slider2.jpg'
	},
	{	id:1,
		img:'img/category-img.jpg'
		},
		{
		id:2,
		img:'img/slider1.jpg'
		
		},
		{
		id:3,
		img: 'img/slidera.jpg'
		}];
	
	var featuredNews =[{
		id:0,
		img:'img/charity2.jpg',
		title:'Duterte Donates Goods to charities',
		desc:'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'
	},
	{
		id:1,
		img:'img/charity2.jpg',
		title:'Duterte Donates',
		desc:'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'
	},
	{
		id:2,
		img:'img/charity2.jpg',
		title:'Duterte Donates',
		desc:'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.'
	}
	];
	
	var featuredStory =[{
		id:0,
		img:'img/stark.jpg',
		title:'Tales from the street',
		desc:'The quick brown fox jumps over the lazy dog.'
		
	},
	{
		id:1,
		img:'img/stark.jpg',
		title:'Tales from the street',
		desc:'The quick brown fox jumps over the lazy dog.'
		
	},{
		id:2,
		img:'img/stark.jpg',
		title:'Tales from the street',
		desc:'The quick brown fox jumps over the lazy dog.'
		
	}
	];
	
	var campaigns =[{
		id:0,
		img: "img/camp1.jpg",
		url: "#/app/campaigns",
		title: "Fighting Against Cancer",
		desc:" bacon cheese burger hotdog donut cupcake	nutella empanada pizza milk tea"
		
	},
	{
		id:1,
		img: "img/camp3.jpg",
		url: "#/app/campaigns",
		title: "Help Iran",
		desc:"  bacon cheese burger hotdog donut cupcake	nutella empanada pizza milk tea"
	},
	{
		id:2,
		img: "img/camp2.jpg",
		url: "#/app/campaigns",
		title: "Give a toy this christmas",
		desc:"bacon cheese burger hotdog donut cupcake	nutella empanada pizza milk tea"
	},
	{
		id:3,
		img: "img/camp4.jpg",
		url: "#/app/campaigns",
		title: "Adopt a dog",
		desc:"bacon cheese burger hotdog donut cupcake	nutella empanada pizza milk tea"
	}];


	return{
		getSlider:function(){
		return homeSlider;
		},
		getFeaturedNews: function(){
			return featuredNews;
		},
		getFeaturedStory: function(){
			return featuredStory;
		},
		getCampaigns: function(){
			return campaigns;
		}
	};
})

.factory('SessionService', function($window){

	
	return {
		set: function(key, value) {
		  $window.localStorage[key] = value;
		},
		get: function(key, defaultValue) {
		  return $window.localStorage[key] || defaultValue;
		},
		setObject: function(key, value) {
		  $window.localStorage[key] = JSON.stringify(value);
		},
		getObject: function(key) {
		  return JSON.parse($window.localStorage[key] || '{}');
		},
		clearStorage: function(key){
			$window.localStorage.removeItem(key);
		}

	}

});
