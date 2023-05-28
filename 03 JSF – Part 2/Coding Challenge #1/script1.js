function calcAverage(v1, v2, v3){
    return (v1 + v2 + v3) / 3
}

function checkWinner(avgDolhins, avgKoalas){
    if(avgDolhins >= 2 * avgKoalas){
        return `Dolhins win (${avgDolhins} vs ${avgKoalas})`
    }
    else if(avgKoalas >= 2 * avgDolhins){
        return `Koalas win (${avgKoalas} vs ${avgDolhins})`
    }
    else{
        return 'No team wins!'
    }
}

const avgDolhins = calcAverage(44, 23, 11)
const avgKoalas = calcAverage(65, 54, 49)

console.log(avgDolhins, avgKoalas)

console.log(checkWinner(avgDolhins, avgKoalas))