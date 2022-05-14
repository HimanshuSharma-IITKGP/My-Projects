class Question{
    constructor(q,op1,op2,op3,op4){
        this.question = q ;
        this.options = [op1,op2,op3,op4] ;
        this.correctAnswer = op4 ;
    }
}

const questionsArray = [new Question("What is the most densely populated U.S. state?" ,"Connecticut" , "Maryland" , "Rhode Island" , "New Jersey"),
                        new Question("Kazakhstan lies at approximately the same latitude as which other country?" ,"Afghanistan" , "Nepal" , "Turkey" , "Mongolia"),
                        new Question("Albert Einstein was a scientist famous for his work on physics. Where was he born?" ,"United Kingdom" , "United States" , "France" , "Germany"),
                        new Question("Where in the US is the “Petrified Forest?" , "Nevada" ,"Arkansas" , "California" ,"Arizona"),
                        new Question("Which former house painter began the Cubist movement with Picasso?" ,"Gris" ,"Jethalal" ,"Cezanne" , "Braque") ,
                        new Question("Which former French colony was the first to achieve independence in Sub-Saharan Africa in 1958?" ,"Algeria" ,"Mali" ,"Central African Republic","Guinea"),
                        new Question("Which Caribbean island has the greatest area?" ,"Jamaica" ,"Puerto Rico" , "Hispanola" ,"Cuba"),
                        new Question("Zulia is a province of which country?" ,"Colombia" ,"Brazil","Ecuador","Venezuela"),
                        new Question("Who painted “The Garden of Earthly Delights”?" ,"Salvador Dali" ,"Francisco Goya" , "Rembrandt" , "Hieronymus Bosch"),
                        new Question("On the TV sitcom Seinfeld, what is Kramer’s first name?" ,"Kessler" , "Newman" , "Larry", "Cosmo"),
                        new Question("Which style of art was produced in, or under the influence of, the Eastern Roman Empire?" , "Levantine" ,"Baroque" ,"Sotiy" ,"Byzantine") ,
                        new Question("Which state of the U.S. has recorded the fastest surface wind?" ,"Illinois" ,"Montana" ,"Alaska" ,"New Hampshire") ,
                        new Question("Which country will have the highest estimated net increase in population between 1995-2000 (16 million more people)?" ,"China" ,"Bangladesh" ,"Nigeria","India"),
                        new Question("The jelly-like substance that makes up most of a cell is the:" , "DNA" ,"Nucleus" ,"Chloroplast" ,"Cytoplasm"),
                        new Question("Find the odd word out.",  "For" ,"By" ,"Near" ,"Yet") ,
                        new Question("What is the capital of French Polynesia?" , "Praia" , "Moroni" ,"Cayenne" ,"Papeete"),
                        new Question("How much of your vision do you lose if you go blind in one eye?" ,"50 Percent" ,"40 Percent" ,"30 Percent" ,"20 Percent") ,
                        new Question("Which performer received a gold single for the song “Daniel” in 1973?" ,"Billy Joel" ,"Michael Jackson" ,"Eminem" ,"Elton John") ,
                        new Question("In which continent are Chile, Argentina and Brazil?" ,"Africa" ,"Asia" ,"North America" ,"South America"),
                        new Question("What is the highest-grossing film of all time without taking inflation into account?" , "Titanic" , "Avatar","Star Wars: The Force Awakens","Avengers EndGame"),
                        new Question("What team has the longest winning streak in NBA history?" ,"Chicago Bulls" ,"Golden State Warriors" ,"Phoenix Suns","Los Angeles Lakers"),
                        new Question("What is the name of the Chicago Fire’s soccer stadium?" , "CenturyLink Field" , "Allianz Field" , "Dignity Health Sports Park" , "Toyota Park") ,
                        new Question("Who won Chelsea player of the year in 2012 and 2013?" , "Eden Hazard" , "David Luiz" , "Fabio Borini" , "Juan Mata") ,
                        new Question("Who scored the first goal at Wembley Stadium?" , "Fernando Cabrita" , "Josep Seguer" , "Olavo Rodrigues Barbosa" , "David Jack"),
                        new Question("What day of the year is considered National Pi Day?" , "14th November" , "14th May" ,"14th September" ,"14th March")] ;




const numberOfQuestions = 10 ;
const container = document.querySelector(".container") ;
const correct = document.querySelector(".correct") ;
const incorrect = document.querySelector(".incorrect") ;
const unattempted = document.querySelector(".unattempted") ;
const nextBtn = document.querySelector(".next") ;
const startBtn = document.querySelector(".start") ;
const nightModeToggle = document.querySelector(".night-mode-toggle") ;

const optionsDiv = Array.from(document.querySelectorAll(".options > div")) ;
// console.log(optionsDiv);

var appendMinutes = document.getElementById("minutes");
var appendSeconds = document.getElementById("seconds");


var minutes = 00 ;
var seconds = 00 ;
var tens = 00; 

var timeId ;


const shuffledQuestionsArray = questionsArray.sort(() => 0.5 - Math.random());
console.table(shuffledQuestionsArray) ;

var currentQuestionNumber = 0 ;
const minutesLimit =  0;
const secondsLimit = 10 ;

var isAnswered = 0;



function showNextQuestion(){

    if(isAnswered == 0 && currentQuestionNumber!=0){
        unattempted.innerHTML ++ ;
    }

    isAnswered = 0;

    clearInterval(timeId) ;
    appendMinutes.innerHTML = "00" ;
    appendSeconds.innerHTML = "00" ; 

    minutes = 0;
    seconds = 0;
    tens = 0 ;

    timeId = setInterval(startTimer , 10) ;

    if(currentQuestionNumber>=numberOfQuestions){
        appendMinutes.innerHTML = "00" ;
        appendSeconds.innerHTML = "00" ; 
        minutes = 0;
        seconds = 0;
        tens = 0 ;
            
        clearInterval(timeId) ;
        alert("Max Questions Reached hit start to reset ") ;
        return ;
    }
    const shuffledOptionsArray = shuffledQuestionsArray[currentQuestionNumber].options.sort(() => 0.5 - Math.random()) ;


    container.querySelector(".question").innerHTML = currentQuestionNumber+1 + " . " + shuffledQuestionsArray[currentQuestionNumber].question ;

    var i = 1 ;
    optionsDiv.forEach(option => {
        option.querySelector("pre").innerHTML = i + " . " + shuffledOptionsArray[i-1] ; 
        i++ ;
    });

    optionsDiv.forEach(option =>{
        option.querySelector(".select").addEventListener("click",checkAnswer) ;
        option.querySelector(".select").style.backgroundColor = "white" ;
    });

    currentQuestionNumber ++ ;
}

function checkAnswer (){
    const thisQuestion = this.parentNode.parentNode.previousElementSibling.innerHTML ;
    const thisQuestionNumber = parseInt(thisQuestion.substring(0,thisQuestion.indexOf("."))) ;

    const chosenOption = this.previousElementSibling.innerHTML.substring(this.previousElementSibling.innerHTML.indexOf(".")+2) ;
    const correctOption = shuffledQuestionsArray[thisQuestionNumber-1].correctAnswer;

    if(correctOption.localeCompare(chosenOption) == 0){
        console.log("Correct Answer");
        this.style.backgroundColor = "#198754" ;
        correct.innerHTML ++ ;
    }
    else{
        this.style.backgroundColor = "#dc3545" ;
        incorrect.innerHTML ++ ;
    }

    isAnswered = 1 ;

    optionsDiv.forEach(option =>{
        option.querySelector(".select").removeEventListener("click" ,checkAnswer) ;
    });

    setTimeout(showNextQuestion ,500) ;
}


function startTimer() {

    if( appendMinutes.innerHTML == minutesLimit &&
        appendSeconds.innerHTML == secondsLimit ){
            appendMinutes.innerHTML = "00" ;
            appendSeconds.innerHTML = "00" ; 

            minutes = 0;
            seconds = 0;
            tens = 0 ;
            
            alert("Time's up ! hit start to reset") ;
            clearInterval(timeId) ;
            

            nextBtn.removeEventListener("click",showNextQuestion) ;

            optionsDiv.forEach(option =>{
                option.querySelector(".select").removeEventListener("click" ,checkAnswer) ;
            });
        
        }
    tens++;
    
    
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
    }
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    if(seconds > 59){
        minutes ++ ;
        seconds = 0;
        tens = 0;
        appendMinutes.innerHTML = "0" + minutes ;
        appendSeconds.innerHTML = "0" + 0 ;
    }

    if(minutes>9){
        appendMinutes.innerHTML = minutes ;
    }
}




function startTheQuiz(){
    if(currentQuestionNumber==numberOfQuestions){
        location.reload() ;
        return ;
    }
    if(currentQuestionNumber!=0){
        return ;
    }
    nextBtn.addEventListener("click",showNextQuestion) ;
    timeId = setInterval(startTimer, 10);
    showNextQuestion() ;
}

function toggleNightMode(){
    document.querySelector("body").classList.toggle("night-mode") ;
    
    if(this.getAttribute("stroke") == "#2c3e50"){
        this.setAttribute("stroke" , "#ffffff");
    }
    else{
        this.setAttribute("stroke" , "#2c3e50") ;
    }
}

nightModeToggle.addEventListener("click",toggleNightMode) ;
startBtn.addEventListener("click" ,startTheQuiz) ;
