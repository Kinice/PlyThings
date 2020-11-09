const testArr = [5,8,3,6,2,1,91,231,4,634,23,6]
// quick sort
function quickSort(arr) {
  if (arr.length < 2) return arr
  const less = [], greater = []
  const base = arr[0]
  for (let i = 1; i < arr.length; i++) {
    arr[i] <= base ? less.push(arr[i]) : greater.push(arr[i])
  }
  return [...quickSort(less), base, ...quickSort(greater)]
}

console.log(quickSort(testArr))

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(bubbleSort(testArr))
