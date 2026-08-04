const quiz=[

{
question:"Which language is used to style web pages?",
answers:["HTML","CSS","Python","Java"],
correct:1
},

{
question:"Which tag creates a hyperlink?",
answers:["<img>","<a>","<link>","<p>"],
correct:1
},

{
question:"Which language makes a webpage interactive?",
answers:["CSS","C++","JavaScript","SQL"],
correct:2
},

{
question:"Which property changes text color in CSS?",
answers:["font-color","color","text-color","background"],
correct:1
},

{
question:"HTML stands for?",
answers:[
"Hyper Text Markup Language",
"High Transfer Machine Language",
"Hyper Tool Multi Language",
"None"
],
correct:0
},

{
question:"Which symbol is used for IDs in CSS?",
answers:[".","#","*","@"],
correct:1
},

{
question:"Which company developed JavaScript?",
answers:["Google","Microsoft","Netscape","Apple"],
correct:2
},

{
question:"Which HTML tag inserts an image?",
answers:["<image>","<img>","<src>","<picture>"],
correct:1
},

{
question:"Which CSS property changes background color?",
answers:[
"background-color",
"color",
"bgcolor",
"background"
],
correct:0
},

{
question:"Inside which HTML tag is JavaScript written?",
answers:["<script>","<js>","<javascript>","<code>"],
correct:0
}

];

let current=0;

let score=0;

let selected=[];

const question=document.getElementById("question");

const answers=document.getElementById("answers");

const result=document.getElementById("result");

const progress=document.getElementById("progressBar");

const number=document.getElementById("questionNumber");

const restart=document.getElementById("restartBtn");

function loadQuestion(){

question.innerHTML=quiz[current].question;

number.innerHTML="Question "+(current+1)+" of "+quiz.length;

progress.style.width=((current)/quiz.length)*100+"%";

answers.innerHTML="";

quiz[current].answers.forEach((answer,index)=>{

const btn=document.createElement("button");

btn.innerHTML=answer;

btn.onclick=()=>selectAnswer(index,btn);

if(selected[current]!=null){

btn.disabled=true;

if(index==quiz[current].correct){

btn.classList.add("correct");

}

if(index==selected[current] && index!=quiz[current].correct){

btn.classList.add("wrong");

}

}

answers.appendChild(btn);

});

}

function selectAnswer(index,button){

selected[current]=index;

const all=document.querySelectorAll(".answers button");

all.forEach(btn=>btn.disabled=true);

if(index==quiz[current].correct){

button.classList.add("correct");

score++;

}else{

button.classList.add("wrong");

all[quiz[current].correct].classList.add("correct");

}

}

document.getElementById("nextBtn").onclick=()=>{

if(current<quiz.length-1){

current++;

loadQuestion();

}else{

showResult();

}

};

document.getElementById("prevBtn").onclick=()=>{

if(current>0){

current--;

loadQuestion();

}

};

function showResult(){

question.style.display="none";

answers.style.display="none";

document.querySelector(".buttons").style.display="none";

number.style.display="none";

progress.style.width="100%";

result.innerHTML="You scored "+score+" out of "+quiz.length;

restart.style.display="block";

}

restart.onclick=()=>{

location.reload();

};

loadQuestion();
