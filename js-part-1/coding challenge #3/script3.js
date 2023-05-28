const dolphins1 = 96, dolphins2 = 108, dolphins3 =89
const koalas1=88, koalas2=91, koalas3=110

const scoreDolphins = (dolphins1+dolphins2+dolphins3) / 3
const scoreKoalasl = (koalas1+koalas2+koalas3) / 3

console.log(scoreDolphins, scoreKoalasl)

if(scoreDolphins > scoreKoalasl && scoreDolphins >= 100){
    console.log('Dolphins wine the trophy.')
}
else if(scoreDolphins < scoreKoalasl && scoreKoalasl >= 100){
    console.log('Koalas win the trophy.')
}
else if(scoreDolphins === scoreKoalasl && scoreDolphins >= 100 && scoreKoalasl >= 100){
    console.log('Both win the trophy.')
}
else{
    console.log('No one wins the trophy')
}