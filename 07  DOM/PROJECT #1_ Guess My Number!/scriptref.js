let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20
let highscore = 0

document.querySelector('.check').addEventListener('click', function(){
    const gussNumber = Number(document.querySelector('.guess').value)

    if(!gussNumber){
        document.querySelector('.message').textContent = 'This is not a number!'
        document.querySelector('.message').style.color = 'red'

    }
    else if(gussNumber == secretNumber){
        document.querySelector('.message').textContent = 'This is correct number.'
        document.querySelector('.message').style.color = 'black'
        document.querySelector('body').style.backgroundColor = 'green'
        document.querySelector('.number').textContent = secretNumber;
        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
    }
    else{
    
        if(gussNumber > secretNumber){
            document.querySelector('.message').textContent = 'This number is too high!'
        }
        else{
            document.querySelector('.message').textContent = 'This number is too low!'
        }
        if(score<=1){
            score = 0
            document.querySelector('.message').textContent = 'You loss the game!'
            document.querySelector('.message').style.color = 'black'
            document.querySelector('body').style.backgroundColor = 'red'
        }
        else
            score--
            document.querySelector('.score').textContent = score
        
    }
})


document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20)+1
    score = 20
    document.querySelector('.score').textContent = score
    document.querySelector('.highscore').textContent = highscore
    document.querySelector('.message').textContent = 'start guessing....'
    document.querySelector('body').style.backgroundColor = 'black'
    document.querySelector('.message').style.color = '#eee'
})

