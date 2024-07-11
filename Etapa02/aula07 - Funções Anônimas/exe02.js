//Usando Spread 

const f = function(...valores){
    let res = 0 
    for (v of valores){
        res += v
    }
    return res
}

console.log(f(1, 2, 3, 4, 5)) // Outputs: 15