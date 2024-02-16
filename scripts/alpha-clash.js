// function play(){
// //    step 1: hide the home section.to hide screen add the class hidden to the home section
// const homeSection =document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// const playGround =document.getElementById('play-ground');
// playGround.classList.remove('hidden');

// // show the playground
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('player prsssed', playerPressed);

    // get the expected press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,expectedAlphabet);

    // check matched or not 
    if(playerPressed === expectedAlphabet){
        console.log('u got a point');
        console.log('you have pressed corectly', expectedAlphabet);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
        console.log('u lost a life');
    }


}

// capture keyboard button press
document.addEventListener('keyup', handleKeyboardButtonPress);





function continueGame(){
    // step 1:generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('ur random alphabet:',alphabet);

    // se randomly generated alphabet ti=o the screen(show it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set background color
    setBackgroundColorById(alphabet);
    


}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}