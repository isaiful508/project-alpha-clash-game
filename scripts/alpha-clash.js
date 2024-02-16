// function play(){
// //    step 1: hide the home section.to hide screen add the class hidden to the home section
// const homeSection =document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// const playGround =document.getElementById('play-ground');
// playGround.classList.remove('hidden');

// // show the playground
// }

function handleKeyboardButtonPress(event) {
    const playerPressed = event.key;
    // console.log('player prsssed', playerPressed);

    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');

    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);

    // check matched or not 
    if (playerPressed === expectedAlphabet) {
        console.log('u got a point');
       


        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        // setTextElementValueById('current-score', updatedScore);




        // -------------------------------------
        // update score
        // 1.get the current score
        //     const currentScoreElement = document.getElementById('current-score');
        //     const currentScoreText = currentScoreElement.innerText;
        //     const currentScore = parseInt(currentScoreText);



        //     console.log(currentScore);
        //     // 2.increase the score by 1
        // const newScore = currentScore + 1;

        //     // 3.show the updated score
        //    currentScoreElement.innerText = newScore;

        // start a new round

        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    } else {
        console.log('u lost a life');
        const currentLife = getTextElementValueById('current-life')
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
           gameOver();
        }

        // ------------------------------
        // step 1 get the current life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);

        // // 2.reduce the life count
        // const newLife = currentLife - 1;
        // // 3.display the updated life count
        // currentLifeElement.innerText = newLife;

    }


}

// capture keyboard button press
document.addEventListener('keyup', handleKeyboardButtonPress);





function continueGame() {
    // step 1:generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('ur random alphabet:',alphabet);

    // se randomly generated alphabet ti=o the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);



}

function play() {
    // hide evrything show only the play ground

    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('curremct-score', 0);
    

    continueGame();
}

function gameOver(){
hideElementById('play-ground');
showElementById('final-score');
}