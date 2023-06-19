const easyLvlQuestions = [
    {
        id:1,
        question:"How many continents are there on Earth?",
        options:["Seven","Nine","Two","One"],
        correct:"Seven"
    },
    {
        id:2,
        question:"What year was NASA founded?",
        options:["2009","1948","1960","1958"],
        correct:"1958"
    },
    {
        id:3,
        question:"Who was the first man on the moon?",
        options:["Muhammad Ali","George Washington","Abdul Qadeer Khan","Neil Armstrong"],
        correct:"Neil Armstrong"
    },
    {
        id:4,
        question:"Who is the father of mathematics?",
        options:["Mike Tyson","Pythagoras","Galileo Galilei","Ezio Auditore"],
        correct:"Pythagoras"
    },
    {
        id:5,
        question:"How many men does it take to dig half a hole?",
        options:["0, you cant dig half a hole","two","Ten","Not enough info"],
        correct:"0, you cant dig half a hole"
    },
    {
        id:6,
        question:"Spinach is high in:",
        options:["Biotin","Vitamin E","Vitamin C","Iron"],
        correct:"Iron"
    },
    {
        id:7,
        question:"How many months in a year have 28 days?",
        options:["9","1","None","Dosent't exist"],
        correct:"1"
    },
    {
        id:8,
        question:"Which among the following produces honey?",
        options:["Bee","Ant","Wasp","Dinosaurs"],
        correct:"Bee"
    }
    
];
const mediumLvlQuestions = [
    {
        id:1,
        question:"Which number should be there next in this series? 25, 24, 22, 19, 15",
        options:["10","9","13","7"],
        correct:"10"
    },
    {
        id:2,
        question:"Which one of the four is least like the other four?",
        options:["Lion","Turtle","Snake","Cow"],
        correct:"Snake"
    },
    {
        id:3,
        question:"If you rearrange the letters 'BARBIT,' you would have the name of a:",
        options:["State","Animal","Ocean","Planet"],
        correct:"Animal"
    },
    {
        id:4,
        question:"Which one of the four is least like the other four?",
        options:["Potato","carrot","Beans","Apple"],
        correct:"Apple"
    },
    {
        id:5,
        question:"Nia, twelve years old, is three times as old as her sister. How old will Nia be when she is twice as old as her sister?",
        options:["12","15","16","18"],
        correct:"16"
    },{
        id:6,
        question:"Which one of the four makes the best comparison? Brother is to sister as niece is to:",
        options:["Daughter","Mother","Aunt","Nephew"],
        correct:"Nephew"
    },
    {
        id:7,
        question:"Which one of the four letters is least like the other three?",
        options:["E","N","Z","K"],
        correct:"E"
    },
    {
        id:8,
        question:"Which one of the four makes the best comparison? Milk is to glass as the letter is to:",
        options:["Stamp","Mail","Envelope","Book"],
        correct:"Envelope"
    }
];
const hardLvlQuestions = [
    {
        id:1,
        question:"What is the fourth sequence in the following:1.BRRRRRBB, 2.RBRBRRBR ,3...",
        options:["RBABRRRR","RBBBRRRR","BRRBRBRR","BRRRRRBB"],
        correct:"BRRRRRBB"
    },
    {
        id:2,
        question:"3,54,204,461,833,1328,1954,?",
        options:["1234","2719","2323","3421"],
        correct:"2719"
    },
    {
        id:3,
        question:"If no toogs are fibs, some hins are budis, all hins are gups, all gups are fibs, and some rojems are toogs, then its possible that some rojems are budis?",
        options:["Invalid","True","False","32.2"],
        correct:"True"
    },
    {
        id:4,
        question:"How many vowels appear in this question?",
        options:["12","13","14","15"],
        correct:"13"
    },
    {
        id:5,
        question:"-g-t-y- -y-g-t- -t-y-g-   -h-u-z- -z-h-u- -u-z-h- What will the 3 values of the next grid be?",
        options:["I-w-z","d-g-d","t-v-r","I-v-a"],
        correct:"I-v-a"
    },{
        id:6,
        question:"If all tugs are fugs, and all fugs are yoms, then all tugs are yoms?",
        options:["Invalid","True","False","toms"],
        correct:"True"
    },
    {
        id:7,
        question:"2, 6, 1, 3, 0.5, 1.5, ? What is the missing number?",
        options:["1.75","0.55","0.25","0.75"],
        correct:"0.25"
    },
    {
        id:8,
        question:"Are there more odd or square numbers in the following list? 2, 3, 4, 12, 16, 25, 29, 36, 48, 49, 72, 81, 90, 101, 125, 139?",
        options:["Square numbers by 1 more.","Odd numbers by 1 more.","Square numbers by 3 more.","All are the same amount."],
        correct:"Square numbers by 1 more."
    }
];


let correctAnswer;
let validAnswerCounter = 0;
let invalidAnswerCounter = 0;
let level;
let isActive = false;
let answer = "";
let timerId;


let difficultyList = document.getElementById("difficulty-list");
let optionsList = document.getElementById("options-list");
let userNameLabel = document.getElementById('user-name-label');
let mainLabelOne = document.getElementsByClassName('main-label')[1];
let mainLabelTwo = document.getElementsByClassName('main-label')[2];
let mainLabelThree = document.getElementsByClassName('main-label')[3];
let givenUserNameOne = document.getElementsByClassName("given-user-name")[0];
let givenUserNameTwo = document.getElementsByClassName("given-user-name")[1];
let givenUserNameThree = document.getElementsByClassName("given-user-name")[2];
let questionSection = document.getElementById('questions-sec');
let difficultyPanel = document.getElementById('choose-difficulty-panel');
let noUserNameMessage = document.getElementById("no-user-name-msg");
let startGameButton = document.getElementById("start-game-btn");
let restartGameButton = document.getElementById("restart-page-btn");
let setCorrectAnswer = document.getElementById("correct-ans");
let setInCorrectAnswer = document.getElementById("incorrect-ans");
let setCalculatedIq = document.getElementById("calculated-iq");
let setIqStatus = document.getElementById("iq-status");
let setTotalScore = document.getElementById("total-score");
let loadResult = document.getElementById('load-result');
let options = document.getElementById("options-list");
let getUserName = document.getElementById("user-name");

document.addEventListener("DOMContentLoaded", function() {
    userNameLabel.style.display='block';
    questionSection.style.display = "none"
    mainLabelOne.style.display="none";
    mainLabelTwo.style.display = "none";
    mainLabelThree.style.display = "none";

    startGameButton.addEventListener("click",checkUserName);
    restartGameButton.addEventListener("click",restartGame);
    difficultyList.addEventListener("click",checkDifficulty);
    optionsList.addEventListener("click",checkSolutionAndCalculateResult);
    preventMultipleSelectionOfList();
});

/**
 * During game when questions being asked
 * this function prevents multiple selection
 * of answers.
 */
function preventMultipleSelectionOfList(){
    document.onselectstart = () => {
        return false;
    };
    // document.oncopy = () => {
    //     return false;
    // };
    // document.ondrag = () => {
    //     return false;
    // };
    // document.ondrop = () => {
    //     return false;
    // };
    // document.oncut = () => {
    //     return false;
    // };
    // document.onpaste = () => {
    //     return false;
    // };
}

/**
 * This function checks the selected difficulty, sets the
 * user name on screen and starts the game by calling another
 * function which takes a perameter of selected difficulty.
 * @param {*} event 
 */
function checkDifficulty(event){
    if (isActive === false) {
        level = event.target.innerText;
    } else {
        level = localStorage.getItem("difficulty");
    }
    mainLabelOne.style.display="none";
    questionSection.style.display = "block"
    mainLabelTwo.style.display = "block";
    givenUserNameTwo.innerHTML = localStorage.getItem("user-name");
    localStorage.setItem("difficulty",level);
    isActive = true;
    startGame(level); 
}

function checkUserName (){
    if(this.id === "start-game-btn"){
        let userName = getUserName.value;
        localStorage.setItem("user-name",userName);
        if(userName === ""){
            noUserNameMessage.innerText = "Kindly provide a user name";
        } else {
            userNameLabel.style.display='none';
            difficultyPanel.style.display="block";
            mainLabelOne.style.display="block";
            givenUserNameOne.innerText = userName;               
        }
    } else {
        alert("Invalid Username");
        throw("Username is invalid");
    }
}

function checkSolutionAndCalculateResult(event){
    answer = event.target.innerText;
        if(correctAnswer === answer){
            ++validAnswerCounter;
            setCorrectAnswer.innerText = validAnswerCounter;
        }
        else if(answer === ""){
            ++invalidAnswerCounter;
            setInCorrectAnswer.innerText = invalidAnswerCounter;
        }else{
            ++invalidAnswerCounter;
            setInCorrectAnswer.innerText = invalidAnswerCounter;
        }
        let totalQuestions = validAnswerCounter + invalidAnswerCounter

        if(totalQuestions <= 7){
            difficultyList.click();
        }else{
            // Main score
            givenUserNameThree.innerHTML = localStorage.getItem("user-name");
            let average = averageOfCorrectAnswers(validAnswerCounter);
            setCalculatedIq.innerText = average[0];
            setIqStatus.innerText = average[1];
            setTotalScore.innerText = validAnswerCounter;
            optionsList.style.pointerEvents = "none";
            loadResult.style.display = "block";
            clearInterval(timerId);
            setTimeout(() => {
                questionSection.style.display = "none";
                mainLabelThree.style.display = "block";
                }, 5000);          
        }
}
function restartGame(){
    mainLabelOne.style.display = "none";
    window.location.reload(true);
}

/**
 * 
 * @param {*} gameDifficulty 
 */
function startGame(gameDifficulty){
    if(gameDifficulty === "Easy"){
        // easy question array
        setGameArea(easyLvlQuestions,gameDifficulty);      
    } else if(gameDifficulty === "Medium"){
        // Medium question array
        setGameArea(mediumLvlQuestions,gameDifficulty);
    }else if(gameDifficulty === "Hard"){
        // Hard question array
        setGameArea(hardLvlQuestions,gameDifficulty);
    }else{
        alert("None");
    }
}

function setGameArea(gameQuestions,gameDifficulty){
    // First shuffle questions
    let randomGeneratedQuestions = gameQuestions.sort(() => Math.random() - .5);
    questionSection.children[0].innerText = randomGeneratedQuestions[0].question;
    

    options.children[0].innerText = randomGeneratedQuestions[0].options[0];
    options.children[1].innerText = randomGeneratedQuestions[0].options[1];
    options.children[2].innerText = randomGeneratedQuestions[0].options[2];
    options.children[3].innerText = randomGeneratedQuestions[0].options[3];

    //Valid answer
    correctAnswer = randomGeneratedQuestions[0].correct;
    setCountdown(gameDifficulty);

    // removing questios that were asked
    if (gameDifficulty === "Easy") {
        easyLvlQuestions.splice(randomGeneratedQuestions[0].id[0],1);
    } else if(gameDifficulty === "Medium"){
        mediumLvlQuestions.splice(randomGeneratedQuestions[0].id[0],1);
    }else{
        hardLvlQuestions.splice(randomGeneratedQuestions[0].id[0],1);
    }
    //set timer
    
}

function averageOfCorrectAnswers(noOfValidAnswers){
    let average = (noOfValidAnswers / 8) * 100 ;  
    if(average >=0 && average <= 25){
        return[average,"Below average intelligence"];
    }else if(average >= 25 && average <=50){
        return[average,"Average intelligence"];
    }else if(average >= 50 && average <=75){
        return[average,"Above average intelligence"];
    }else if(average >= 75 && average <=100){
        return[average,"Gifted"];
    }else{
        return ["Invalid average value","Not found"]
    }
}

function setCountdown(gameDifficulty){
    clearInterval(timerId)
    let timeLimit;
    if (gameDifficulty === 'Hard'){
        timeLimit = 120;
    }else{
        timeLimit = 30;
    }
    let timer = document.getElementById("timer");
    timerId = setInterval(function(){
        if (timeLimit == -1) {
            clearTimeout(timerId);
            optionsList.click();           
          } else {
            timer.innerHTML = timeLimit + "sec";
            timeLimit--;
          }
    },1000);  
}