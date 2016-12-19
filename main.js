var bands = [
			"Boyz II Men",
			"NSync",
			"New Kids on the Block",
			"98 Degrees",
			"One Direction"
			];

var vegetables = [
				"Carrots",
				"Kale",
				"Zucchini",
				"Broccoli",
				"Squash"
				];



//print to DOM via corresponding index div ID
function print(boyBands) {
	var outputBoyBands = document.getElementById('boy-bands');
	outputBoyBands.innerHTML = boyBands;
}

//loop through bands array and store in var listHTML
function printBoyBands( list ) {
	var listHTML = '<ol>';
	for ( var i = 0; i < list.length; i += 1 ) {
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>';
	print(listHTML);
}

printBoyBands(bands)

// ________________________________

//print to DOM via corresponding index div ID
function printTwo(boyBands) {
	var outputBoyBands = document.getElementById('vegetables');
	outputBoyBands.innerHTML = boyBands;
}

//loop through bands array and store in var listHTML
function printVeggies( list ) {
	var listHTML = '<ol>';
	for ( var i = 0; i < list.length; i += 1 ) {
		listHTML += '<li>' + list[i] + '</li>';
	}
	listHTML += '</ol>';
	printTwo(listHTML);
}

printVeggies(vegetables);

