function sortArray(nums: number[]) {
  let len = nums.length
  if (len === 1) {
    return nums
  }

  quickSort(nums, 0, len - 1)
  return nums
  function quickSort(nums: number[], left: number, right: number) {
    if (left < right) {
      let pivot = partition(nums, left, right)
      quickSort(nums, left, pivot - 1)
      quickSort(nums, pivot + 1, right)
    }
  }

  function partition(nums: number[], left: number, right: number) {
    let i = left, j = right + 1
    let pivot = nums[left]
    while (1) {
      // 这个循环结束的条件就是 nums[++i]>=pivot
      // nums[--j]>=pivot
      while (nums[++i] < pivot) {
        if (i === right) {
          break
        }
      }
      while (pivot < nums[--j]) {
        if (j === left) {
          break
        }
      }
      if (i >= j) {
        break
      }
      [nums[i], nums[j]] = [nums[j], nums[i]]
    }
    [nums[left], nums[j]] = [nums[j], nums[left]]
    return j
  }
}
console.log(sortArray([5, 2, 3, 1]));
