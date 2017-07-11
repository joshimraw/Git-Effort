
var numbers = [1,2,3,4,5,6];
function sum(){
	var sumation = 0;
	for(var i=0; i<numbers.length; i++){
		sumation += numbers[i];
	}
	return sumation;
}
document.getElementById('number').innerHTML= sum();