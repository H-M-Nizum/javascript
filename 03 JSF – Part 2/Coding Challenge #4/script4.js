const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]

const tips = []

const total = []

function calcTip(bill){
    return bill>=50 && bill<=300 ? bill*.15 : bill*.20
}
for(let i=0; i<bills.length; i++){
    tips[i] = calcTip(bills[i])
    total[i] = bills[i] + tips[i]
}

for(let i=0; i<10; i++){
    console.log(bills[i], tips[i], total[i])
}

