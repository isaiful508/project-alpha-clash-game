// function play(){
// //    step 1: hide the home section.to hide screen add the class hidden to the home section
// const homeSection =document.getElementById('home-screen');
// homeSection.classList.add('hidden');

// const playGround =document.getElementById('play-ground');
// playGround.classList.remove('hidden');

// // show the playground
// }
function continueGame(){
    // step 1:generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('ur random alphabet:',alphabet);

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