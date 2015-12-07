angular.module('following.services', [])
.factory('MyCharities', function(){
	
	var mycharitylist = [{
		id: 0,
		title: 'Gugma sa Kabataan',
		desc: 'Founded in 1992 by ...',
		img: 'img/gsk.jpg'
	},{
		id: 1,
		title: 'Bantay Bata 163',
		desc: 'Founded in 1992 by ...',
		img: 'img/163.jpg'	
	}];
	
	return {
		getList: function() {
			return mycharitylist;
		}
	};
});
