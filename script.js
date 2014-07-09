var app = angular.module("instantSearch", []);

app.filter('searchFor', function(){

	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(item){

			if(item.name.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}

		});

		return result;
	};

});

function InstantSearchController($scope){

	$scope.items = [
		{
			rank: '1',
			flag: 'img/SPA.png',
			name: 'Mark Marquez',
			team: 'Honda',
			point: '100',
			url: 'http://www.motogp.com/en/riders/Marc+Marquez'
		},
		{
			rank: '2',
			flag: 'img/SPA.png',
			name: 'Dani Pedrosa',
			team: 'Honda',
			point: '72',
			url: 'http://www.motogp.com/en/riders/Dani+Pedrosa'
		},
		{
			rank: '3',
			flag: 'img/ITA.png',
			name: 'Valentino Rossi',
			team: 'Yamaha',
			point: '61',
			url: 'http://www.motogp.com/en/riders/Valentino+Rossi'
		},
		{
			rank: '4',
			flag: 'img/ITA.png',
			name: 'Andrea Dovizioso',
			team: 'Ducati',
			point: '45',
			url: 'http://www.motogp.com/en/riders/Andrea+Dovizioso'
		},
		{
			rank: '5',
			flag: 'img/SPA.png',
			name: 'Jorge Lorenzo',
			team: 'Yamaha',
			point: '35',
			url: 'http://www.motogp.com/en/riders/Jorge+Lorenzo'
		},
		{
			rank: '6',
			flag: 'img/GER.png',
			name: 'Stefan Bradl',
			team: 'Honda',
			point: '30',
			url: 'http://www.motogp.com/en/riders/Stefan+Bradl'
		},
		{
			rank: '7',
			flag: 'img/SPA.png',
			name: 'Aleix Espargaro',
			team: 'Forward Yamaha',
			point: '30',
			url: 'http://www.motogp.com/en/riders/Aleix+Espargaro'
		},
		{
			rank: '8',
			flag: 'img/GBR.png',
			name: 'Bradley Smith',
			team: 'Yamaha',
			point: '28',
			url: 'http://www.motogp.com/en/riders/Bradley+Smith'
		},
		{
			rank: '9',
			flag: 'img/ITA.png',
			name: 'Andrea Iannone',
			team: 'Ducati',
			point: '25',
			url: 'http://www.motogp.com/en/riders/Andrea+Iannone'
		},
		{
			rank: '10',
			flag: 'img/SPA.png',
			name: 'Pol Espargaro',
			team: 'Yamaha',
			point: '25',
			url: 'http://www.motogp.com/en/riders/Pol+Espargaro'
		},
		{
			rank: '11',
			flag: 'img/USA.png',
			name: 'Nicky Hayden',
			team: 'Honda',
			point: '23',
			url: 'http://www.motogp.com/en/riders/Nicky+Hayden'
		},
		{
			rank: '12',
			flag: 'img/JPN.png',
			name: 'Hiroshi Aoyama',
			team: 'Honda',
			point: '19',
			url: 'http://www.motogp.com/en/riders/Hiroshi+Aoyama'
		},
		{
			rank: '13',
			flag: 'img/GBR.png',
			name: 'Scott Redding',
			team: 'Honda',
			point: '14',
			url: 'http://www.motogp.com/en/riders/Scott+Redding'
		},
		{
			rank: '14',
			flag: 'img/COL.png',
			name: 'Yonny Hernandez',
			team: 'Ducati',
			point: '13',
			url: 'http://www.motogp.com/en/riders/Yonny+Hernandez'
		},
		{
			rank: '15',
			flag: 'img/SPA.png',
			name: 'Alvaro Bautista',
			team: 'Honda',
			point: '10',
			url: 'http://www.motogp.com/en/riders/Alvaro+Bautista'
		},
		{
			rank: '16',
			flag: 'img/GBR.png',
			name: 'Cal Crutchlow',
			team: 'Ducati',
			point: '10',
			url: 'http://www.motogp.com/en/riders/Cal+Crutchlow'
		},
		{
			rank: '17',
			flag: 'img/CZE.png',
			name: 'Karel Abraham',
			team: 'Honda',
			point: '8',
			url: 'http://www.motogp.com/en/riders/Karel+Abraham'
		},
		{
			rank: '18',
			flag: 'img/USA.png',
			name: 'Colin Edwards',
			team: 'Forward Yamaha',
			point: '7',
			url: 'http://www.motogp.com/en/riders/Colin+Edwards'
		},
		{
			rank: '19',
			flag: 'img/ITA.png',
			name: 'Danilo Petrucci',
			team: 'ART',
			point: '2',
			url: 'http://www.motogp.com/en/riders/Danilo+Petrucci'
		},
		{
			rank: '20',
			flag: 'img/SPA.png',
			name: 'Hector Barbera',
			team: 'Avintia',
			point: '2',
			url: 'http://www.motogp.com/en/riders/Hector+Barbera'
		},
		{
			rank: '21',
			flag: 'img/AUS.png',
			name: 'Broc Parkes',
			team: 'PBM',
			point: '1',
			url: 'http://www.motogp.com/en/riders/Broc+Parkes'
		}
		
	];

}