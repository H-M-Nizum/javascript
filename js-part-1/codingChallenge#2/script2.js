const markHeight = 1.69
const markMass = 78
const jonHeight = 1.95
const jonMass = 92

const markBMI = markMass / markHeight**2
const jonBMI = jonMass / jonHeight**2

const markHigherBMI = markBMI > jonBMI
//console.log(markBMI, jonBMI)
//console.log(markHigherBMI)

if(markBMI > jonBMI){
    console.log("Mark's BMI is higher than John's!")
    console.log(`Mark's BMI(${markBMI}) is higher than John's(${jonBMI})!`)
}
else{
    console.log( "John's BMI is higher than Mark's!")
    console.log(`John's BMI(${jonBMI}) is higher than Mark's(${markBMI})!`)
}