

var questions = [
	
	  new Question("who is Sonu Solanki's best friend?", ["Sanjay", "Prabhakar","Vivek", "Rehana","Kavya"], "Prabhakar"),
    new Question("What is Sonu Solanki's favourite dish?", ["Rajma chawal", "Chole Bhture","Masala Dosa", "Egg Curry"], "Chole Bhture"),

    new Question("What is Sonu Solanki's Hobby?", ["watching Movie", "Playing Cricket","Travelling", "Making Friends"],"watching Movie"),
    

        

];

var quiz = new Quiz(questions);




function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}





function Quiz() {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
	
}

Question.prototype.isCorrectAnswer = function(choices) {

    return this.answer === choices;

}




Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
	
        this.score++;
		console.log(this.score);
    }

    this.questionIndex++;
	
	
	


} 

 
 
 

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];

}

Quiz.prototype.isEnded=function(){
	return this.questionIndex===this.questions.length;
}

populate();




function populate()
{
    if(quiz.isEnded()){  var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;}

else{
	
	
   var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

	var choices= quiz.getQuestionIndex().choices;
	
		for(var i=0;i<choices.length;i++){
	var element=document.getElementById("choice"+ i);

	   element.innerHTML =choices[i];
	       guess("bt" + i, choices[i]); 
	}
	 
	
	 
	 var cqn = quiz.questionIndex+1;
	
		var element=document.getElementById("progress");
		
	
	 element.innerHTML="Question " +cqn+" of "+questions.length;
 
 

}}


function guess(id, guess){
	
	
	
	button= document.getElementById(id);
	
	
		

	
button.onclick =function(){
    

	quiz.guess(guess);


populate();


}
	
	

}
	

  

