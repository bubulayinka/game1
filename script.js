const mychoice = document.querySelector("#mychoice");
const computerchoice = document.querySelector("#computerchoice");
const result = document.querySelector("#result");
const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => choice.addEventListener('click' , choicehandler));


function choicehandler () {
    mychoice.innerHTML = this.innerHTML;
    computerchoiceHandler();
    choseWinnerHandler();
}
function computerchoiceHandler () {
    const comchoice = Math.floor(Math.random() * choices.length);
    if(comchoice == 0){
        computerchoice.innerHTML = "man";
    }
    else if(comchoice == 1){
        computerchoice.innerHTML = "woman";
    }
    else{
        computerchoice.innerHTML = "cockroach";
    }
}


function choseWinnerHandler() {

    //draw case
    if(mychoice.innerHTML === "man" && computerchoice.innerHTML === "man"){
            result.innerHTML = "you draw";
            result.style.color="green"
           
    }
    if(mychoice.innerHTML === "woman" && computerchoice.innerHTML === "woman"){
        result.innerHTML = "you draw";
        result.style.color="green"
    }
    if(mychoice.innerHTML === "cockroach" && computerchoice.innerHTML === "cockroach"){
        result.innerHTML = "you draw";
        result.style.color="green"
    }

    //lose case
    if(mychoice.innerHTML === "man" && computerchoice.innerHTML === "woman"){
        result.innerHTML = "you lose";
        result.style.color="red"
    }
    if(mychoice.innerHTML === "man" && computerchoice.innerHTML === "cockroach"){
        result.innerHTML = "you lose";
        result.style.color="red"
    }
    if(mychoice.innerHTML === "woman" && computerchoice.innerHTML === "cockroach"){
        result.innerHTML = "you lose";
        result.style.color="red"
    }

    // win case
    if(mychoice.innerHTML === "woman" && computerchoice.innerHTML === "man"){
        result.innerHTML = "you win";
        result.style.color="blue"
    }
    
    if(mychoice.innerHTML === "cockroach" && computerchoice.innerHTML === "woman"){
        result.innerHTML = "you win";
        result.style.color="blue"
    }
    if(mychoice.innerHTML === "cockroach" && computerchoice.innerHTML === "man"){
        result.innerHTML = "you win";
        result.style.color="blue"
    }
   
}