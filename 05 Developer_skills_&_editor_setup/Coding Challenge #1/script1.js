function printForecast(arr){
    let str = '... '
    for(let i=0; i<arr.length; i++){
        str += `${arr[i]}ºC in ${i+1} days... `
    }
    return str
}
const arr = [12, 5, -5, 0, 4]
console.log(printForecast(arr))