function insertionSort(arr){
    let n = arr.length
    for(let i=1;i<n;i++){
        let key = arr[i]
        let j=i-1
        //Move elements of arr[0....i-1] that are greater than key
        //to one position ahead of their current position
        while(j>=0 && arr[j]>key){
            arr[j+1] = arr[j] 
            j--
        }
        //place the key in its correct position
        arr[j+1] = key
    }
    return arr
}
let arr = [2,1,4,3]
let result = insertionSort(arr)
console.log(result)