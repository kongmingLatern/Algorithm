function mergeSortArr(nums: number[]) {
  function mergeSort(nums: number[]) {
    const len = nums.length
    if (len === 1) {
      return nums
    }
    const mid = len >> 1
    const left = nums.slice(0, mid)
    const right = nums.slice(mid)
    return merge(mergeSort(left), mergeSort(right))

    function merge(left, right) {
      const res: number[] = []

      while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
          res.push(left.shift())
        } else {
          res.push(right.shift())
        }
      }
      return res.concat(left).concat(right)
    }
  }
  nums = mergeSort(nums)
  return nums
}
console.log(mergeSortArr([5, 2, 3, 1]))
