class Question{
    constructor(q,op1,op2,op3,op4){
        this.question = q ;
        this.options = [op1,op2,op3,op4] ;
        // while declaring an object of Question class i will write the 4th option to be correct one
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
                        new Question("What day of the year is considered National Pi Day?" , "14th November" , "14th May" ,"14th September" ,"14th March"),
                        new Question("Who sang the title song for the latest Bond film, No Time to Die?" , "Adele" , "Sam Smith" , "Raftaar" , "Billie Eilish") ,
                        new Question("Which flies a green, white, and orange (in that order) tricolour flag?" , "Ireland" , "Ivory Coast","I don't know" , "Italy"),
                        new Question("What company makes the Xperia model of smartphone?" , "Apple" , "Samsung" , "Nokia" , "Sony") ,
                        new Question("Where was the first example of paper money used?","India" , "Turkey" , "US" , "China"),
                        new Question("Which of the following languages has the longest alphabet?" , "English" , "Greek" , "Arabic" , "Russian") ,
                        new Question("The fear of insects is known as what?" , "Hydrophobia" , "Arachnophobia" , "Ailurophobia" , "Entomophobia") ,
                        new Question("Which horoscope sign is a fish?" , "Cancer" ,"Leo" , "Aquarius" , "Pisces") ,
                        new Question("Which Game of Thrones character is known as the Young Wolf?"  ,"I haven't seen it", "Arya Stark" , "Sansa Stark" , "Robb Stark"),
                        new Question("What city hosted the 2002 Olympic Games?" , "India" , "Tokyo" , "China" , "Beijing") ,
                        new Question("Who directed the Academy award winning movie Gladiator?" , "James Cameron" ,"Steven Soderbergh" ,"Christopher Nolan", "Ridley Scott") ,
                        new Question("What is the strongest muscle in the human body?" , "Heart" , "Glutes" ,"Biceps" , "Jaw") ,
                        new Question("Where was tea invented?" ,"India" , "England" , "Brazil" , "China"),
                        new Question("Where was the earliest documented case of the Spanish flu?" , "France" ,"Spain", "Mexico","USA"),
                        new Question("In 1768, Captain James Cook set out to explore which ocean?" , "Atlantic Ocean" , "Indian Ocean" , "Arctic Ocean" , "Pacific Ocean") ,
                        new Question("Which of the following is not an international organisation?" , "FIFA" , "NATO" , "ASEAN" , "FBI") ,
                        new Question("What was the first country to use tanks in combat during World War I?" , "France" , "Japna" , "Germany" , "Britain"),
                        new Question("Which two months are named after Emperors of the Roman Empire?" , "January and February" , "March and April" , "May and June" , "July and August") ,
                        new Question("Which of the following actors was the first one to play James Bond?", "Timothy Dalton" , "Roger Moore" , "Chris Rock" , "Sean Connery") ,
                        new Question("In which country is Transylvania?" , "Bulgaria" , "Croatia" ,"Serbia", "Romania"),
                        new Question("The phrase: ”I think, therefore I am” was coined by which philosopher?" , "Socrates" , "Plato" , "Aristotle" , "Descartes") ,
                        new Question("Who is known as the Patron Saint of Spain?" , "St Patrick" , "St Benedict" , "St John" , "St James"),
                        new Question("What does the term “SOS” commonly stand for?" , "Save Our Sheep" , "Save Our Ship" , "Save Our Seal" , "Save Our Souls") ,
                        new Question("What is the name of the first book of the Old Testament in the Bible?" , "Exodus" , "Proverbs" , "Mathers" , "Genesis"),
                        new Question("How many time zones are there in total in the world?" , "8" , "16" , "32" , "24"),
                        new Question("What is the rarest type of blood in the human body?" , "O positive" , "B negative" , "A negative" , "AB negative"),
                        new Question("Cu is the chemical symbol for which element?" , "Cobalt" , "Iron" , "Silver" , "Copper")] ;




const numberOfQuestions = 10 ;
const container = document.querySelector(".container") ;
const correct = document.querySelector(".correct") ;
const incorrect = document.querySelector(".incorrect") ;
const unattempted = document.querySelector(".unattempted") ;
const nextBtn = document.querySelector(".next") ;
const startBtn = document.querySelector(".start") ;
const nightModeToggle = document.querySelector(".night-mode-toggle") ;
const animationCircle = document.querySelector(".animation-circle") ;
const timeLogDiv = document.querySelector(".time-log") ;

const optionsDiv = Array.from(document.querySelectorAll(".options > div")) ;


var appendMinutes = document.getElementById("minutes");
var appendSeconds = document.getElementById("seconds");


var minutes = 00 ;
var seconds = 00 ;
var tens = 00; 

var timeId ;

// shuffling the entire questions array
const shuffledQuestionsArray = questionsArray.sort(() => 0.5 - Math.random());
console.table(shuffledQuestionsArray) ;

var currentQuestionNumber = 0 ;
const minutesLimit =  0;
const secondsLimit = 10 ;

var isAnswered = 0;
var isCorrect = 0 ;

nightModeToggle.addEventListener("click",toggleNightMode) ;
startBtn.addEventListener("click" ,startTheQuiz) ;


function startTheQuiz(){
    // if end is reached then reload the page on clicking start
    if(currentQuestionNumber==numberOfQuestions){
        location.reload() ;
        return ;
    }
    // if someone clicks start in the middle of quiz
    if(currentQuestionNumber!=0){
        return ;
    }
    // start animation and clock and add event listener to next button
    optionsDiv.forEach(function(options){
        options.querySelector(".select").style.opacity = "1" ;
    }) ;

    animationCircle.classList.add("animate") ;
    nextBtn.addEventListener("click",showNextQuestion) ;
    timeId = setInterval(startTimer, 10);
    showNextQuestion() ;
}

function toggleNightMode(){
    document.querySelector("body").classList.toggle("night-mode") ;
    
    // changing the attribute of svg
    if(this.getAttribute("stroke") == "#2c3e50"){
        this.setAttribute("stroke" , "#ffffff");
    }
    else{
        this.setAttribute("stroke" , "#2c3e50") ;
    }
}


function showNextQuestion(){

    // if the question has not been attempted
    if(isAnswered == 0 && currentQuestionNumber!=0){
        unattempted.innerHTML ++ ;
    }


    //stopping the clock
    clearInterval(timeId) ;

    // tracking and displaying the time of individual questions and their text color according to correctness
    if(currentQuestionNumber !== 0){
        const node = document.createElement("pre") ;
        node.innerHTML = `${currentQuestionNumber}.) ${appendMinutes.innerHTML}:${appendSeconds.innerHTML}` ;
        timeLogDiv.appendChild(node) ;

        if(isCorrect == 0){
            node.style.color = "#dc3545" ;
        }
        if(isCorrect == 1){
            node.style.color = "#198754" ;
        }
        if(isAnswered == 0){
            node.style.color = "rgb(255, 149, 0)" ;
        }
    }


    isAnswered = 0;
    isCorrect = 0;

    // restarting the clock 
    appendMinutes.innerHTML = "00" ;
    appendSeconds.innerHTML = "00" ; 

    minutes = 0;
    seconds = 0;
    tens = 0 ;

    timeId = setInterval(startTimer , 10) ;

    // if max questions are reached
    if(currentQuestionNumber>=numberOfQuestions){
        appendMinutes.innerHTML = "00" ;
        appendSeconds.innerHTML = "00" ; 
        minutes = 0;
        seconds = 0;
        tens = 0 ;
            
        // stopping the clock and the animation
        animationCircle.classList.remove("animate") ;
        clearInterval(timeId) ;
        alert("Max Questions Reached hit start to reset ") ;
        return ;
    }

    const shuffledOptionsArray = shuffledQuestionsArray[currentQuestionNumber].options.sort(() => 0.5 - Math.random()) ;

    // putting question
    container.querySelector(".question").innerHTML = `${currentQuestionNumber+1} . ${shuffledQuestionsArray[currentQuestionNumber].question}` ;

    // putting options 
    var i = 1 ;
    optionsDiv.forEach(option => {
        option.querySelector("pre").innerHTML = `${i} . ${shuffledOptionsArray[i-1]}` ; 
        i++ ;
    });

    //adding event listener to each select and changing their color to default
    optionsDiv.forEach(option =>{
        option.querySelector(".select").addEventListener("click",checkAnswer) ;
        option.querySelector(".select").style.backgroundColor = "white" ;
    });

    currentQuestionNumber ++ ;
}

function checkAnswer (){
    const thisQuestion = this.parentNode.parentNode.previousElementSibling.innerHTML ;
    const thisQuestionNumber = parseInt(thisQuestion.substring(0,thisQuestion.indexOf("."))) ;

    // strings of chosenOption and CorrectOption
    const chosenOption = this.previousElementSibling.innerHTML.substring(this.previousElementSibling.innerHTML.indexOf(".")+2) ;
    const correctOption = shuffledQuestionsArray[thisQuestionNumber-1].correctAnswer;

    if(correctOption.localeCompare(chosenOption) == 0){
        isCorrect = 1 ;
        console.log("Correct Answer");
        this.style.backgroundColor = "#198754" ;
        correct.innerHTML ++ ;
    }
    else{
        this.style.backgroundColor = "#dc3545" ;
        incorrect.innerHTML ++ ;
    }

    isAnswered = 1 ;

    //until the next question is loaded the button should not listen any click
    optionsDiv.forEach(option =>{
        option.querySelector(".select").removeEventListener("click" ,checkAnswer) ;
    });

    // added a little time delay to be able to see the effect of color change on selected option
    setTimeout(showNextQuestion ,500) ;
}

function startTimer() {

    // if limit of max time is reached
    if( appendMinutes.innerHTML == minutesLimit &&
        appendSeconds.innerHTML == secondsLimit ){

            // add the time to time-log
            const node = document.createElement("pre") ;
            node.innerHTML = `${currentQuestionNumber}.) ${appendMinutes.innerHTML}:${appendSeconds.innerHTML}` ;
            timeLogDiv.appendChild(node) ;
            node.style.color = "rgba(255, 0, 0, 0.512)" ;

            //and then reset the clock to 0
            appendMinutes.innerHTML = "00" ;
            appendSeconds.innerHTML = "00" ; 

            minutes = 0;
            seconds = 0;
            tens = 0 ;
            

            //stopping the clock and animation and removing event listener from next button
            alert("Time's up ! hit start to reset") ;
            clearInterval(timeId) ;
            
            currentQuestionNumber = numberOfQuestions ;
            nextBtn.removeEventListener("click",showNextQuestion) ;

            animationCircle.classList.remove("animate") ;
            optionsDiv.forEach(option =>{
                option.querySelector(".select").removeEventListener("click" ,checkAnswer) ;
            });
        
        }

    // tens are increasing every 10 ms (0.01s)
    tens++;
    

    // if tens become 100 then seconds increase by 1 
    if (tens > 99) {
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
    }

    // and if second are in double digit than no need to add any 0
    if (seconds > 9) {
        appendSeconds.innerHTML = seconds;
    }

    //similarly if seconds become 60 then increase the minutes by 1 
    if(seconds > 59){
        minutes ++ ;
        seconds = 0;
        tens = 0;
        appendMinutes.innerHTML = "0" + minutes ;
        appendSeconds.innerHTML = "0" + 0 ;
    }

    //and if minutes are in double digit than no need to add any 0
    if(minutes>9){
        appendMinutes.innerHTML = minutes ;
    }
}


