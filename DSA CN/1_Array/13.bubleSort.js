function bubleSort(arr){
    let n=arr.length
    for(let i=0;i<n-1;i++){
        for(let j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                //swap
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
let arr = [4,3,6,8,1,5,7]
let result = bubleSort(arr)
console.log(result)