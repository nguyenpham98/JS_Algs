
const merge = (left, right, leftLimit, rightLimit, sorted, buffer) => {
    let i = left
    // compare two subarrays and update the smaller element at i in buffer 
    while (left < leftLimit && right < rightLimit){
        if (sorted[left] <= sorted[right]){
            buffer[i] = sorted[left]
            i++
            left++
        }
        else {
            buffer[i] = sorted[right]
            i++
            right++
        }
    }
    // add the remaining elements of both arrays
    while (left < leftLimit){
        buffer[i] = sorted[left]
        i++
        left++
    }
    while (right < rightLimit){
        buffer[i] = sorted[right]
        i++
        right++
    }
}
const mergeSort = (arr) => {
    // first create a copy of original array and create a buffer array which is temporary array with length of the copy 
    let sorted = arr.slice()
    let n = sorted.length
    let buffer = new Array(n)
    
    for (let size=1; size<n; size *= 2){
        // size = 1,2,4,8...
        for (let leftStart=0; leftStart<n; leftStart += 2*size){
            // get the parameters for two subarrays
            let left = leftStart
            let right = Math.min(left+size, n)
            let leftLimit = right
            let rightLimit = Math.min(right+size, n)
            // merge the subarrays
            // buffer in this step will contain sorted subarrays of current sizes
            merge(left, right, leftLimit, rightLimit, sorted, buffer)
        }
        // swap sorted and buffer so sorted will have sorted subarrays of current sizes
        // buffer remain the playground 
        let temp = sorted
        sorted = buffer
        buffer = temp
        
    }
    return sorted
}
console.log(mergeSort([3, 6, 1, 7, 8, 9, 5]));