var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
}

function displayResults()
{
	var average = 0;
	for(var i=0;i<scores.length;i++)
	{
		average= (average*(i)+scores[i])/(i+1);
	}
	var largest= scores[0];
	var index = 0;
	for(var i=0; i<scores.length; i++)
	{
		if(largest<scores[i])
		largest=scores[i];
		
		
	}

	for(var i=0; i<scores.length; i++)
	{
		if(largest== scores[i])
		index=i;
		
	}
	
	document.getElementById("results").innerHTML="<h2> Results </h2><br /> Average score is "+average + "<br> <p> High Score= "+names[index]+ " with "+largest ;
	

}
function displayScores (){

	var table = "";
	
	for (var i = 0; i <names.length; i++) {
		table += "<tr>" +
		"<td>" + names[i]+ "</td>" +
		"<td>" + scores[i]+ "</td>" +
		"</tr>"
      
       }
	   document.getElementById("scores_table").innerHTML = "<h2> Scores </h2>"+"<table>"+ table+"</table>";
}
function addScore()
{	
	
	var input =  document.getElementById("name").value;
	var input2 = document.getElementById("score").value;
		
	if( input == "" ||input2<0 || input2>100)
		{
			
			alert("You must enter a name and a valid score.");
		}
		


	names.push(input);
	scores.push(input2);
	
	

}
