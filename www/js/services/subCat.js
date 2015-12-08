angular.module('subCat.services', [])
.factory('subCatList', function() {
var list=[{
			id:0, 
			name: 'Gugma sa kabataan',
			desc:'a charity that helps street children, the marginalized and children who cannot afford to go to school',
			logo: 'img/gsk.jpg'
		},{
			id:1, 
			name: 'Bantay Bata',
			desc:'Ta child welfare program launched in 1997 to protect disadvantaged and at-risk children through a nationwide network of social services. ',
			logo: 'img/163.jpg'
		}];
		
	return {
		get: function(charityId) {
			for (var i = 0; i < charity.length; i++) {
        if (charity[i].id === parseInt(charityId)) {
          return charity[i];
				}
			}
			return null;
		},
		all:function(){
			return list;
		}
	};

});