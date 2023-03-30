console.log('dqdqwdqd')

function isPrimeNumber(x){
    if(x==1){return false};
    for (let i=2; i<x; i++){
        if(x%i==0 || x==1){
            return false
        }
    }
    return true
}

function primesFinder(n){
    let res = []
    let primeNumber = 2
    while(res.length<n){
        
        if(isPrimeNumber(primeNumber)){
            res.push(primeNumber)
        }
        primeNumber++
    }
    return res
}

console.time('app')
console.log(primesFinder(process.argv[2]))
console.timeEnd('app')