var app = angular.module("HangmanApp",[]);//Srtting up the app

app.controller("GameController",['$scope',function($scope){//Dependency ingenction
var words = ["Rat","Car","Island","Mountain"];

$scope.incorrectLettersChosen = [];
$scope.correctLettersChosen = [];
$scope.guesses = 8;
$scope.disolayWord = '';
$scope.input = {
	letter:''
}

//Below selects a random word from words array
var selectRandomWord = function(){
	var index = Math.round(Math.random()*words.length);//Random number given 
	return words[index];
}

var newGame = function(){
	$scope.incorrectLettersChosen = [];
	$scope.correctLettersChosen = [];
	$scope.guesses = 7;
	$scope.disolayWord = '';
	selectedWord = selectRandomWord();
	var tempDisplayedWord = "";
	console.log(selectedWord);
	for (var i = 0; i < selectedWord.length; i++) {
		tempDisplayedWord += '*';
	}
	$scope.disolayWord = tempDisplayedWord;
	console.log(tempDisplayedWord);
}

$scope.letterChosen = function(){
	console.log("working on click button");
	for (var i = 0; i < $scope.correctLettersChosen; i++) {
		if ($scope.correctLettersChosen[i].toUpperCase()==$scope.input.letter.toUpperCase()) 
		{
			$scope.input.letter = "";//Clears out the input
			return;
		}
	}


	for (var i = 0; i < $scope.incorrectLettersChosen; i++) {
		if ($scope.incorrectLettersChosen[i].toUpperCase()==$scope.input.letter.toUpperCase()) 
		{
			$scope.input.letter = "";//Clears out the input
			return;
		}
	}

var correct = false;

for (var i = 0; i < selectedWord.length; i++) {
	if (selectedWord[i].toLowerCase()==$scope.input.letter.toLowerCase())
	 {
	 	$scope.disolayWord = $scope.disolayWord.slice(0,i)+$scope.input.letter.toUpperCase()+$scope.disolayWord.slice(i+1);
	 	correct = true;
	 }
}

 if (correct)
  {
  	$scope.correctLettersChosen.push($scope.input.letter.toUpperCase());
  }else{
  	$scope.guesses--;
  	$scope.incorrectLettersChosen.push($scope.input.letter.toUpperCase());
  	console.log($scope.incorrectLettersChosen.length);
  	if ($scope.incorrectLettersChosen.length==1) 
  	{
  		document.getElementById('Small-bar').style.display = "block";
  	}

  	if ($scope.incorrectLettersChosen.length==2) 
  	{
  		document.getElementById('Head').style.display = "block";
  	}  	
  	if ($scope.incorrectLettersChosen.length==3) 
  	{
  		document.getElementById('Body').style.display = "block";
  	}  	  	
  	if ($scope.incorrectLettersChosen.length==4) 
  	{
  		document.getElementById('Left-Arm').style.display = "block";
  	}  	  
  	if ($scope.incorrectLettersChosen.length==5) 
  	{
  		document.getElementById('Right-Arm').style.display = "block";
  	}  	


	if ($scope.incorrectLettersChosen.length==6) 
  	{
  		document.getElementById('Left-Leg').style.display = "block";
  	}  	
  	if ($scope.incorrectLettersChosen.length==7) 
  	{
  		document.getElementById('Right-Leg').style.display = "block";
  	}  	

  }
	  	$scope.input.letter = "";//Clears out the input
	  	if ($scope.guesses==0) 
	  	{
	  		  		document.getElementById('Lost-div').style.display = "block";

	  	}

	  	if ($scope.disolayWord.indexOf("*")==-1)
	  	 {
	  	 	document.getElementById('Lost-div').style.display = "block";
	  	 	document.getElementById('Lost-div').style.backgroundColor  = "#00ff00";
	  	 	document.getElementById('Lost-div').innerHTML  = "Congrats you have won";

	  	 }



}

newGame();

}])