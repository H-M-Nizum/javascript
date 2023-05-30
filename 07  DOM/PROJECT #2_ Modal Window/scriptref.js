/*
const showModel = document.querySelectorAll('.show-modal')
const closeModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

for(let i=0; i<showModel.length; i++){
    showModel[i].addEventListener('click', function(){
        modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
    })
}
closeModal.addEventListener('click', function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
overlay.addEventListener('click', function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

document.addEventListener('keydown', function(e){
    if(e.key == 'Escape' && !modal.classList.contains('hidden')){
        modal.classList.add('hidden')
        overlay.classList.add('hidden')
    }
})
*/
const showModel = document.querySelectorAll('.show-modal')
const closeModal = document.querySelector('.close-modal')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')

const open = function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
}
const close = function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
}

for(let i=0; i<showModel.length; i++){
    showModel[i].addEventListener('click', open)
}

closeModal.addEventListener('click', close)
overlay.addEventListener('click', close)

document.addEventListener('keydown', function(e){
    if(e.key == 'Escape' && !modal.classList.contains('hidden')){
        close()
    }
})