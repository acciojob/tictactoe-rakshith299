
const button = document.getElementById("submit");
const message = document.getElementById("message");
const boardGame = document.getElementById("board-game");

const firstCont = document.querySelector(".first-cont");
const secondCont = document.querySelector(".second-cont");

const player1Sign = 'X';
const player2Sign = 'O';

let winnerFound = false;

let currentPlayer;


const winningIndexes = [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];

function addWhosTurn(){
	message.innerHTML = `${currentPlayer}, you're up `;
}


function checkForWinner(){
	let ret = false;
	for(let x = 0; x < winningIndexes.length; x++){
		const eachArr = winningIndexes[x];

		const aa = document.getElementById(eachArr[0]);
		const bb = document.getElementById(eachArr[1]);
		const cc = document.getElementById(eachArr[2]);

		const aaValue = aa.innerText;
		const bbValue = bb.innerText;
		const ccValue = cc.innerText;

		if(aaValue !== "" && bbValue !== "" && ccValue !== ""){
			if(aaValue == bbValue && bbValue == ccValue && ccValue == aaValue){
				aa.classList.add("purple-bg");
				bb.classList.add("purple-bg");
				cc.classList.add("purple-bg");
				ret = true;
				break;
			}
		}
				
	}

	return ret;
}

button.addEventListener("click", function(){
	firstCont.classList.add("display-out");
	secondCont.classList.add("display-in");


	const player1 = document.getElementById("player1").value;
	const player2 = document.getElementById("player2").value;

	currentPlayer = player1;
	
	addWhosTurn();

	for(let i = 1; i <= 9; i++){
		let eachCell = document.createElement("div");
		eachCell.classList.add("square");
		eachCell.id = i;

		eachCell.addEventListener("click", function(){
			//console.log(eachCell);
			if(winnerFound === false){

			
				if(currentPlayer == player1){
					if(eachCell.innerText === ""){
						eachCell.innerText = player1Sign;
						currentPlayer = player2;
					}
				}else if(currentPlayer == player2){
					if(eachCell.innerText === ""){ 
						eachCell.innerText = player2Sign;
						currentPlayer = player1;
					}
				}
			}
			addWhosTurn();

			let received = checkForWinner();

			if(received === true){
				winnerFound = true;
				
				message.innerText = `${currentPlayer == player1? player2: player1}, congratulations you won!`;
			}
		});

		boardGame.appendChild(eachCell);

		

		
		
	}

	
	
})


