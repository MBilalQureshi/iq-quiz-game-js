const easyLvlQuestions = [
    {
        question:"2+2?",
        options:[5,8,4,1],
        correct:4
    },{
        question:"3+2?",
        options:[5,8,4,1],
        correct:5
    },
    {
        question:"1+2?",
        options:[5,2,4,1],
        correct:3
    },
    {
        question:"4+2?",
        options:[5,6,4,1],
        correct:6
    }
];
const mediumLvlQuestions = [
    {
        question:"This is question u know",
        answers:[
            {
                text:"I am valid", correct:true,
                text:"I am invalid",correct:false,
                text:"I am invalid",correct:false,
                text:"I am invalid",correct:false
            }
        ]
    }
];
const hardLvlQuestions = [
    {
        question:"This is question u know",
        answers:[
            {
                text:"I am valid", correct:true,
                text:"I am invalid",correct:false,
                text:"I am invalid",correct:false,
                text:"I am invalid",correct:false
            }
        ]
    }
];
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
            }else if(this.id === "next-button"){
                //load next set of questions
                //calculate score to show in the end
                alert("next button");
            } else {
                alert("Something is broken");
                throw("Something is broken");
            }
            
        });
        
       
        let difficultyList = document.getElementById("difficulty-list");
        difficultyList.addEventListener("click",function(event){
                let level = event.target.innerText;
                mainLabel.style.display="none";                
                document.getElementById('questions-sec').style.display = "block"
                document.getElementsByClassName('main-label')[2].style.display = "block";
                document.getElementsByClassName("given-user-name")[1].innerHTML = localStorage.getItem("user-name");
                startGame(level);              
        });




        
    }
    // hideAndShowSections(userNameLabel,difficultyPanel);
});

// function hideAndShowSections(userNameLabel,difficultyPanel){
//     // userNameLabel.style.display = 'block';
//     difficultyPanel.style.display = 'none';
// }
// window.onload = function(){
//     document.getElementById('user-name-label').style.display = "block";
//     document.getElementById('choose-difficulty-panel').style.display = "none";;
// }
// function setDifficulty(event){
//     let level = event.value;
//     if(level === "Easy"){
//         alert("Easy");

//     } else if(level === "Medium"){
//         alert("Medium");
//     }else{
//         alert("Hard");
//     }
// }

function startGame(gameDifficulty){
    if(gameDifficulty === "Easy"){
        // easy question array
        setGameArea(easyLvlQuestions);      
    } else if(gameDifficulty === "Medium"){
        // Medium question array
        setGameArea(mediumLvlQuestions);
    }else if(gameDifficulty === "Hard"){
        // Hard question array
        setGameArea(hardLvlQuestions);
    }else{
        alert("None");
    }
}
function setGameArea(gameQuestions){
    // First shuffle questions
    const randomGeneratedQuestions = gameQuestions.sort(() => Math.random() - .5);
    document.getElementById("questions-sec").children[0].innerText = randomGeneratedQuestions[0].question;
    let options = document.getElementById("options-list");
    // console.log(randomGeneratedQuestions[0].options[1]);
    options.children[0].innerText = randomGeneratedQuestions[0].options[0];
    options.children[1].innerText = randomGeneratedQuestions[0].options[1];
    options.children[2].innerText = randomGeneratedQuestions[0].options[2];
    options.children[3].innerText = randomGeneratedQuestions[0].options[3];
}