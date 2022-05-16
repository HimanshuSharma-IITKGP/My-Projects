var computer__score__span = document.querySelector('#user-score') ;
var user__score__span = document.querySelector('#computer-score') ;

// console.log(computer__score__span);
// console.log(user__score__span);


const buttonsArray = Array.from(document.querySelectorAll('.choices>button'));

// console.log(buttonsArray);
const result__div = document.querySelector('#result') ;

// console.log(result__div);
const computer__choice__img = document.querySelector('#computer-choice > img') ;
// console.log(computer__choice__img);
const user__choice__img = document.querySelector('#user-choice > img') ;
// console.log(user__choice__img);
const choicesForComp = ['r','s','p'] ;


buttonsArray.forEach(button => {
    button.addEventListener('click',()=>{
        // console.log(button);

        const rand = Math.floor(Math.random()*3) ;

        // console.log(button.id);
        // console.log("Computer choice : " + choicesForComp[rand]);
        decideWhoWins(choicesForComp[rand],button.id) ;
    })
});


function decideWhoWins(c,u){
    setImage(c,computer__choice__img) ;
    setImage(u,user__choice__img) ;
    if(u===c){
        result__div.innerHTML = "IT'S A DRAW" ;
        computer__choice__img.style.backgroundColor = "#F54005" ;
        user__choice__img.style.backgroundColor = "#F54005" ;
    }

    if(c==='p' && u==='r'){
        result__div.innerHTML = "YOU LOST";
        computer__score__span.innerHTML ++ ;
        setBgColor('w',computer__choice__img) ;
        setBgColor('l',user__choice__img) ;
    }
    if(c==='p' && u==='s'){
        result__div.innerHTML = "YOU WON";
        user__score__span.innerHTML ++ ;
        setBgColor('l',computer__choice__img) ;
        setBgColor('w',user__choice__img) ;
    }


    if(c==='s' && u==='r'){
        result__div.innerHTML = "YOU WON";
        user__score__span.innerHTML ++ ;
        setBgColor('l',computer__choice__img) ;
        setBgColor('w',user__choice__img) ;
    }
    if(c==='s' && u==='p'){
        result__div.innerHTML = "YOU LOST";
        computer__score__span.innerHTML ++ ;
        setBgColor('w',computer__choice__img) ;
        setBgColor('l',user__choice__img) ;
    }


    if(c==='r' && u==='s'){
        result__div.innerHTML = "YOU LOST";
        computer__score__span.innerHTML ++ ;
        setBgColor('w',computer__choice__img) ;
        setBgColor('l',user__choice__img) ;
    }
    if(c==='r' && u==='p'){
        result__div.innerHTML = "YOU WON";
        user__score__span.innerHTML ++ ;
        setBgColor('l',computer__choice__img) ;
        setBgColor('w',user__choice__img) ;
    }
}



function setImage(l,imageElement){

    if(l==='p'){
        imageElement.setAttribute("src","./p.png");
    }

    else if(l==='r'){
        imageElement.setAttribute("src","./r.png");
    }

    if(l==='s'){
        imageElement.setAttribute("src","./s.png");
    }
}

function setBgColor(l,imageElement){
    if(l==='l'){
        imageElement.style.backgroundColor = '#DE1062'
    }
    else{
        imageElement.style.backgroundColor = 'yellowGreen' ;
    }
}
