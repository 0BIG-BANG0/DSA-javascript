function rowWiseSum(arr2d){
    let n = arr2d.length
    let m = arr2d[0].length

    for(let i=0;i<n;i++){
        let sum = 0
        for(let j=0;j<m;j++){
            sum += arr2d[i][j]
        }
        console.log(sum)
    }
}
let arr2d = [[1,2],[3,4],[5,6],[7,8]]
rowWiseSum(arr2d)