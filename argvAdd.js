console.log(process.argv)
const op = process.argv[2]
const a = process.argv[3]
const b = process.argv[4]

if(op === 'sum'){
    sum(a,b)
}
function sum(a,b){
    console.log(Number(a)+Number(b))
}