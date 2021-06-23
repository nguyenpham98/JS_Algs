const swap = (arr, low, high) => {
    let temp = arr[low]
    arr[low] = arr[high]
    arr[high] = temp
}

const partition = (arr, low, high) => {
    let pivot = arr[high]
    let curr = low
    for (let i=low;i<high;i++){
        if (arr[i] <= pivot){
            swap(arr, curr, i)
            curr++
        }
    }
    swap(arr, curr, high)
    return curr
}

const quickSort = (arr) => {
    let stack = []

    let start = 0
    let end = arr.length -1
    
    stack.push({x: start, y: end})
    while (stack.length){
        const {x,y} = stack.shift()
        const PIVOT = partition(arr, x, y)

        if (PIVOT-1 > x){
            stack.push({x: x, y: PIVOT-1 })
        }
        if (PIVOT+1 < y){
            stack.push({x: PIVOT+1, y: y})
        }
    }
}

let arr = [3,6,1,7,8,9,5]
quickSort(arr)
console.log(arr)