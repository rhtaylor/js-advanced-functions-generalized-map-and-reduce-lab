function map(ary, callback){
        const newAry = []
        for(let i=0; i < ary.length; i++){ 
            
            let x = callback(ary[i]);  
            
            newAry.push(x);
        }
        return newAry
} 

function makeNegative(val){ 
    return (val * -1)
}  

function noChange(val){
    return val
} 

function double(val){
    return val * 2
} 

function squre(val){
    return val * val 
} 
  

function reduce(ary, cb, startPoint){ 
    let memo = !!startPoint ? startPoint : ary[0]
    let i = !!startPoint ? 0 : 1
    for ( ; i < ary.length; i++ ){ 
        memo = cb(ary[i], memo)
    } 
    return memo
}

arry = [1,2,3,-9] 

x = map(arry, makeNegative);
y = map(arry, noChange);
xx = map(arry, double);
z = map(arry, squre); 

console.log(x, "||", y, "||", xx, "||", z)

zz = reduce(arry) 
xyz = reduce(arry, 100) 
console.log(zz, "||", xyz)
reduce(arry, function (e, memo) { return e + memo } )