function printPairs(arr){
    let n = arr.length;
for(let i=0;i<n-1;i++){
    for(let j=i+1;j<n;j++){
        console.log(arr[i],arr[j])
    }
}
}
let arr = [1,4,7,6,5]
printPairs(arr)