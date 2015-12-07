angular.module('subCat.services', [])
.factory('subCatList', function() {
var list=[{
			id:0, 
			name: 'Gugma sa kabataan',
			desc:'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
			logo: 'img/gsk.jpg'
		},{
			id:1, 
			name: 'Bantay Bata',
			desc:'The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.',
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