const easyLvlQuestions = [
    {
        id:1,
        question:"2+2?",
        options:[5,8,4,1],
        correct:4
    },
    {
        id:2,
        question:"3+2?",
        options:[5,8,4,1],
        correct:5
    },
    {
        id:3,
        question:"1+2?",
        options:[3,2,4,1],
        correct:3
    },
    {
        id:4,
        question:"4+2?",
        options:[5,6,4,1],
        correct:6
    }
];
const mediumLvlQuestions = [
    {
        id:1,
        question:"2+2?",
        options:[5,8,4,1],
        correct:4
    },{
        id:2,
        question:"3+2?",
        options:[5,8,4,1],
        correct:5
    },
    {
        id:3,
        question:"1+2?",
        options:[3,2,4,1],
        correct:3
    },
    {
        id:4,
        question:"4+2?",
        options:[5,6,4,1],
        correct:6
    }
];
const hardLvlQuestions = [
    {
        id:1,
        question:"2+2?",
        options:[5,8,4,1],
        correct:4
    },{
        id:2,
        question:"3+2?",
        options:[5,8,4,1],
        correct:5
    },
    {
        id:3,
        question:"1+2?",
        options:[3,2,4,1],
        correct:3
    },
    {
        id:4,
        question:"4+2?",
        options:[5,6,4,1],
        correct:6
    }
];
let correctAnswer;
let validAnswerCounter = 0;
let invalidAnswerCounter = 0;
let level;
let isActive = false;
document.addEventListener("DOMContentLoaded", function() {
    // userNameLabel.style.display = "block";
    // difficultyPanel.style.display = "none";
    let userNameLabel = document.getElementById('user-name-label');
    let mainLabel = document.getElementsByClassName('main-label')[1];
    let difficultyPanel = document.getElementById('choose-difficulty-panel');
    userNameLabel.style.display='block';
    document.getElementById('questions-sec').style.display = "none"

    // difficultyPanel.style.display="block";
    mainLabel.style.display="none";
    document.getElementsByClassName('main-label')[2].style.display = "none";
    // last panel
    document.getElementsByClassName('main-label')[3].style.display = "none";

    let buttons = this.getElementsByTagName("button");

    // this.getElementById('choose-difficulty-panel').style.display = 'none'
    for(let button of buttons){
        button.addEventListener("click",function(){

            if(this.id === "start-game-btn"){
                let userName = document.getElementById("user-name").value;
                localStorage.setItem("user-name",userName);
                if(userName === ""){
                    document.getElementById("no-user-name-msg").innerText = "Kindly provide a user name";
                }else{
                    // userNameLabel.setAttribute('style','display:none;')
                    // difficultyPanel.setAttribute('style','display:block;')
                    // mainLabel.setAttribute('style','display:block')
                    // userNameLabel.style.visibility="hidden";
                    // difficultyPanel.style.display="block";
                    // game start - choose dificulty panel
                    // userNameLabel.remove();
                    // difficultyPanel.style.visibility="visible";
                    userNameLabel.style.display='none';
                    difficultyPanel.style.display="block";
                    mainLabel.style.display="block";
                    document.getElementsByClassName("given-user-name")[0].innerText = userName;
                    
                }
            } else {
                alert("Something is broken");
                throw("Something is broken");
            }
            
        });
        
       
        let difficultyList = document.getElementById("difficulty-list");
        difficultyList.addEventListener("click",function(event){
                if (isActive === false) {
                    level = event.target.innerText;
                } else {
                    level = localStorage.getItem("difficulty");
                }
                mainLabel.style.display="none";                
                document.getElementById('questions-sec').style.display = "block"
                document.getElementsByClassName('main-label')[2].style.display = "block";
                document.getElementsByClassName("given-user-name")[1].innerHTML = localStorage.getItem("user-name");
                localStorage.setItem("difficulty",level);
                isActive = true;
                startGame(level);         
        });
        
        let optionsList = document.getElementById("options-list");
        optionsList.addEventListener("click",function(event){
            // check correct answer
            let answer = event.target.innerText;
            if(correctAnswer === parseInt(answer)){
                ++validAnswerCounter;
                document.getElementById("correct-ans").innerText = validAnswerCounter;
            }
            else{
                ++invalidAnswerCounter;
                document.getElementById("incorrect-ans").innerText = invalidAnswerCounter;
            }
            let totalQuestions = validAnswerCounter + invalidAnswerCounter
            console.log("The total is"+ totalQuestions)
            if(totalQuestions <= 3){
                difficultyList.click();
            }else{
                // Main score
                // setTimeout(document.getElementsByClassName('main-label')[3].style.display = "block",500000);
                setTimeout(() => {
                    document.getElementsByClassName('main-label')[3].style.display = "block"
                  }, 700);
            }
        });
        
    }
    // hideAndShowSections(userNameLabel,difficultyPanel);
});

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
    document.getElementById("questions-sec").children[0].innerText = randomGeneratedQuestions[0].question;
    let options = document.getElementById("options-list");
    // console.log(randomGeneratedQuestions[0].options[1]);
    // for(let i = 0 ; i <= 4 ; i++){
    //     options.children[i].innerText = randomGeneratedQuestions[0].options[i];
    //     console.log(i);
    // }
    options.children[0].innerText = randomGeneratedQuestions[0].options[0];
    options.children[1].innerText = randomGeneratedQuestions[0].options[1];
    options.children[2].innerText = randomGeneratedQuestions[0].options[2];
    options.children[3].innerText = randomGeneratedQuestions[0].options[3];

    //Valid answer
    correctAnswer = randomGeneratedQuestions[0].correct;

    console.log("The length is "+easyLvlQuestions.length);
    // removing questios that were asked
    if (gameDifficulty === "Easy") {
        easyLvlQuestions.splice(randomGeneratedQuestions[0].id[0],1);
    } else if(gameDifficulty === "Medium"){
        mediumLvlQuestions.splice(randomGeneratedQuestions[0].id[0],1);
    }else{
        hardLvlQuestions.splice(randomGeneratedQuestions[0].id[0],1);
    }
    
    
}