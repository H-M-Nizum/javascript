// ###### start my  code hahahahhahahah #####

// // selection
// const player0 = document.querySelector('.player--0')
// const player1 = document.querySelector('.player--1')
// const score0 = document.querySelector('#score--0')
// const score1 = document.querySelector('#score--1')
// const currentScore0 = document.querySelector('#current--0')
// const currentScore1 = document.querySelector('#current--1')
// const image = document.querySelector('.dice')
// const btnNew =document.querySelector('.btn--new')
// const btnRoll =document.querySelector('.btn--roll')
// const btnHold =document.querySelector('.btn--hold')

// // // initial value
// let clickscores1 = 0
// let clickscores0 = 0
// let clickcurrentScore0 = 0
// let clickcurrentScore1 = 0
// let activePlayer = 0
// let playing = true

// // // for roll dice button
// image.classList.add('hidden')
// let clickBtnRoll = function(){
//     if(clickscores0 >= 100 || clickscores1 >= 100){
//         if(clickscores0 >= 100){
//             image.classList.add('hidden')
//             clickcurrentScore0 = 0
//             clickcurrentScore1 = 0
//             score0.textContent = 'wine 100!'
//             score1.textContent = 'loss 0'
//         }
//         else{
//             image.classList.add('hidden')
//             clickcurrentScore1 = 0
//             clickcurrentScore0 = 0
//             score1.textContent = 'wine 100!'
//             score0.textContent = 'loss 0'
//         }
//     }
//     else{
//         if(activePlayer == 0){
//             let value = Math.trunc(Math.random()*6)+1
//             image.classList.remove('hidden')
//             image.src = `${value}.png`
//             if(value == 1){
//                 clickscores0 += clickcurrentScore0
//                 score0.textContent = clickscores0
//                 clickcurrentScore0 = 0
//                 currentScore0.textContent = clickcurrentScore0
//                 activePlayer = 1
//             }
//             else{
//                 clickcurrentScore0 += value
//                 currentScore0.textContent = clickcurrentScore0
//             }
            
//         }
//         else{
//             let value = Math.trunc(Math.random()*6)+1
//             image.classList.remove('hidden')
//             image.src = `${value}.png`
//             if(value == 1){
//                 clickscores1 += clickcurrentScore1
//                 score1.textContent = clickscores1
//                 clickcurrentScore1 = 0
//                 currentScore0.textContent = clickcurrentScore1
//                 activePlayer = 0
    
//             }
//             else{
//                 clickcurrentScore1 += value
//                 currentScore1.textContent = clickcurrentScore1
//             }
        
//         }
        
//     }
// }

    
// btnRoll.addEventListener('click', clickBtnRoll)

// // //for hold button
// btnHold.addEventListener('click', function(){
//     if(clickscores0 >= 100 || clickscores1 >= 100){
//         if(clickscores0 >= 100){
//             image.classList.add('hidden')
//             clickcurrentScore0 = 0
//             clickcurrentScore1 = 0
//             score0.textContent = 'wine 100!'
//             score1.textContent = 'loss 0'
//         }
//         else{
//             image.classList.add('hidden')
//             clickcurrentScore1 = 0
//             clickcurrentScore0 = 0
//             score1.textContent = 'wine 100!'
//             score0.textContent = 'loss 0'
//         }
//     }
    
//     else{
//         if(activePlayer == 0){
//             image.classList.add('hidden')
//             clickscores0 += clickcurrentScore0
//             score0.textContent = clickscores0
//             clickcurrentScore0 = 0
//             currentScore0.textContent = clickcurrentScore0
//             activePlayer = 1
       
//         }
//         else{
//             image.classList.add('hidden')
//             clickscores1 += clickcurrentScore1
//             score1.textContent = clickscores1
//             clickcurrentScore1 = 0
//             currentScore0.textContent = clickcurrentScore1
//             activePlayer = 0
//         }
//     }

    
// })

// // // for NEW GAME button
// btnNew.addEventListener('click', function(){
//     clickscores1 = 0
//     score1.textContent = clickscores1
//     clickscores0 = 0
//     score0.textContent = clickscores0
//     clickcurrentScore0 = 0
//     currentScore0.textContent = clickcurrentScore0
//     clickcurrentScore1 = 0
//     currentScore1.textContent = clickcurrentScore1
//     activePlayer = 0
// })



// ###### start jonas code#####

// // selection

const payer0Element = document.querySelector('.player--0')
const payer1Element = document.querySelector('.player--1')
const score0Element = document.getElementById('score--0')
const score1Element = document.getElementById('score--1')
const current1E0ement = document.getElementById('current--0')
const current1Element = document.getElementById('current--1')

const image = document.querySelector('.dice')
const btnNew = document.querySelector('.btn--new')
const btnRoll = document.querySelector('.btn--roll')
const btnHold = document.querySelector('.btn--hold')

// // starting condition
let scores, currentScore, activePlayer, playing
const startGame = function(){


    currentScore = 0
    activePlayer = 0
    score = [0, 0]
    playing = true

    score0Element.textContent = 0
    score1Element.textContent = 0
    current1E0ement.textContent = 0
    current1Element.textContent = 0
    image.classList.add('hidden')

    payer0Element.classList.remove('player--winner');
    payer1Element.classList.remove('player--winner');
    payer0Element.classList.add('player--active');
    payer1Element.classList.remove('player--active');

}
startGame()

// // Rolling dice functionality
const switching = function(){
    document.getElementById(`current--${activePlayer}`).textContent = 0
    currentScore = 0
    activePlayer = activePlayer === 0 ? 1 : 0
    payer0Element.classList.toggle('player--active')
    payer1Element.classList.toggle('player--active')
}
btnRoll.addEventListener('click', function(){
    if(playing){
        // // roll dice
        const dice = Math.trunc(Math.random()*6)+1
        // // display dice
        image.classList.remove('hidden')
        image.src = `${dice}.png`
        // // if dice == 1
        if(dice != 1){
            // //added by currentScore
            currentScore += dice
            document.getElementById(`current--${activePlayer}`).textContent = currentScore

        } 
        else{
            // // switch the payer 
            switching()
        }
    }

    
})

btnHold.addEventListener('click', function(){
    if(playing){
        // 1. Add current score to active player's score
        score[activePlayer] += currentScore
        // scores[1] = scores[1] + currentScore
    
        document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer]
    
        // 2. Check if player's score is >= 100
        if (score[activePlayer] >= 100) {
        // Finish the game
        playing = false
        image.classList.add('hidden')
    
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner')
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
        } else {
            // Switch to the next player
            switching()
        }

    }

})

btnNew.addEventListener('click', startGame)
