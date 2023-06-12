document.addEventListener("DOMContentLoaded", function() {
    let buttons = this.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click",function(){

            if(this.id === "start-game-btn"){
                let userName = document.getElementById("user-name").value;
                if(userName === ""){
                    document.getElementById("no-user-name-msg").innerText = "Kindly provide a user name";
                }else{

                    // game start - choose dificulty panel

                }
            } else {
                alert("Something is broken");
                throw("Something is broken");
            }
            
        })
    }
})