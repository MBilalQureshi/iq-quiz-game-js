document.addEventListener("DOMContentLoaded", function() {
    // userNameLabel.style.display = "block";
    // difficultyPanel.style.display = "none";
    let userNameLabel = document.getElementById('user-name-label');
    let mainLabel = document.getElementsByClassName('main-label')[1];
    let difficultyPanel = document.getElementById('choose-difficulty-panel');
    userNameLabel.style.display='block';
    // difficultyPanel.style.display="block";
    mainLabel.style.display="none";
    let buttons = this.getElementsByTagName("button");

    // this.getElementById('choose-difficulty-panel').style.display = 'none'

    for(let button of buttons){
        button.addEventListener("click",function(){

            if(this.id === "start-game-btn"){
                let userName = document.getElementById("user-name").value;
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

                }
            } else {
                alert("Something is broken");
                throw("Something is broken");
            }
            
        })
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