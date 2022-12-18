let userPoints = document.querySelector("#userPoints");
let compPoints = document.querySelector("#compPoints");

let choices = document.querySelectorAll(".choices");

let userResults = document.querySelector("#userResult");
let resultText = document.querySelector("#resultText");
let compResults = document.querySelector("#compResult");

let userWin = 0;
let compWin = 0;

choices.forEach((choose, userChoose)=> {
    choose.addEventListener("click", ()=> {
        userResults.innerHTML = `${choose.innerHTML}
            <h3>User</h3>`;

            //generate computer turn
            let compChoose = Math.floor(Math.random()*3);
            if(compChoose == 0){
                //rock
                compResults.innerHTML = '<i class="fa-solid fa-hand-back-fist"></i><h3>Comp</h3>';
            }
            else if(compChoose == 1){
                //paper
                compResults.innerHTML = '<i class="fa-solid fa-hand"></i><h3>Comp</h3>';
            }
            else{//scissors
                compResults.innerHTML = '<i class="fa-solid fa-hand-scissors"></i><h3>Comp</h3>';
            }

            if(userChoose === compChoose){
                resultText.innerText = 'Draw';
            }
            else if (userChoose === 0 && compChoose === 1){
                compWin ++;
                resultText.innerText = 'Lost';
            }
            else if (userChoose === 1 && compChoose === 2){
                compWin ++;
                resultText.innerText = 'Lost';
            }
            else if (userChoose === 2 && compChoose === 0){
                compWin ++;
                resultText.innerText = 'Lost';
            }
            else {
                
                userWin ++;
                resultText.innerText = 'Win';
            }
            userPoints.innerText = userWin;
            compPoints.innerText = compWin;
    })
})
