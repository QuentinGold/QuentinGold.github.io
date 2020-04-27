let joueurActuel = 0
const marqueur = {
    0: '\u274c',
    1: '\ud83d\udd18'
}

function listener(x,i){
    x.addEventListener('click', function(){
        console.log(joueurActuel)
        console.log(x.textContent)
        console.log(typeof x.textContent)
        console.log(x.textContent === marqueur[0])
            if (x.textContent !== marqueur[1] && x.textContent !== marqueur[0]){
                x.textContent = marqueur[joueurActuel]
            }
            else if(x.textContent === marqueur[joueurActuel]){
                x.textContent = ''
            }
        
    })
}
const boxes = document.querySelectorAll('.box')
boxes.forEach(listener)



const boutonFin = document.querySelector('button')
boutonFin.addEventListener('click', function(){
    changementJoueur()
})

function changementJoueur(){
    let messageJoueur = document.querySelector('p')
    if (joueurActuel === 0){
        messageJoueur.textContent = 'Au joueur 2 de jouer !!'
        joueurActuel = 1
    }
    else {
        messageJoueur.textContent = 'Au joueur 1 de jouer !!'
        joueurActuel = 0
    }

}