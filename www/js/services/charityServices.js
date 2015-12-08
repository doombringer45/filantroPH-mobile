angular.module('charity.services', [])
.factory('charities', function() {
	var charity = [{
		id:0,
		name:'Gugma sa Kabataan',
		street:'Hayes Street, Capistrano',
		city:'Cagayan de Oro City',
		zip: 9000,
		state:'Misamis Oriental',
		country:'PH',
		logo:'img/gsk.jpg',
		video:'videos/meow.mp4',
		about:'Gugma sa Kabataan is a charity that helps street children, the marginalized and children who cannot afford to go to school',
		mission:' Working with the street children in providing opportunities to be integrated in family, school and labor.',
		vision:' An empowering place for street children to enjoy survival, development, protection and participation towards a transforming community with HOPE, FAITH and LOVE.',
		currentProjectTitle:'Anti Animal Abuse',
		currProjDetails:'This is not a real project',
		currProjStart:'August 1, 2015',
		currProjEnd:'December 1, 2015',
		currProjImage:'img/camp4.jpg'
	},
	{
		id:1,
		name:'Bantay Bata 163',
		street:'Bulua Street, Bulua',
		city:'Cagayan de Oro City',
		zip: 9000,
		state:'Misamis Oriental',
		country:'PH',
		logo:'img/163.jpg',
		video:'videos/meow.mp4',
		about:'Through the unwavering support and generosity of individuals and organizations around the world, Bantay Bata 163, the child welfare arm of ABS-CBN Foundation continues to serve and protect Filipino children. For the abused, Bantay Bata 163 provides the child helpline 1-6-3, legal services and shelter, to help them heal and move on from situations of physical and sexual abuse to safer and more caring environments and families For sick children whose families cannot afford treatment, Bantay Bata 163 provides medical assistance. For children who simply have less in life, Bantay Bata 163 has feeding programs, and educational scholarships, empowering them with proper education and nutrition to help them reach their dreams. By spearheading trainings, seminars, and conferences, Bantay Bata 163 hopes to prevent child abuse, uphold the rights of children, and disseminate knowledge on laws, techniques and systems in protecting children. In the year 2011, through the help of volunteers and partners, Bantay Bata 163 Caravan brought its medical and dental services to 14 sites nationwide to empower the communities and help in nation-building. Also, in celebration of 15 years this year, Bantay Bata 163 empowers educators through conferences to take on the lead in cultivating positive discipline than corporal punishment in schools. Bantay Bata 163 has branches and desks all over the country-Manila, Laguna, Pangasinan, Bicol, Cebu, Iloilo, Negros, Davao, Zamboanga, Socsargen, and now Northern Mindanao-realizing the dream of creating a better world for Filipino children. Bantay Bata 163 is a child welfare program launched in 1997 to protect disadvantaged and at-risk children through a nationwide network of social services. It includes the rescue and rehabilitation of sick and abused children, training and advocacy on child abuse prevention, rehabilitation of families in crisis, educational scholarships, livelihood, community outreach and medical and dental missions.',
		currentProjectTitle:'Help a child',
		currProjDetails:'This is not a real project',
		currProjStart:'August 1, 2015',
		currProjEnd:'December 1, 2015',
		currProjImage:'img/give.jpg'
	}];
	
	
	return {
		get: function(charityId) {
			for (var i = 0; i < charity.length; i++) {
        if (charity[i].id === parseInt(charityId)) {
          return charity[i];
        }
      }
	  return null;
	 }
	};
});