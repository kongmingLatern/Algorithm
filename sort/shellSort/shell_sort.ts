function sortArray(nums: number[]) {
  let len = nums.length
  if (len === 1) {
    return nums
  }

  let h = 1

  while (h < len / 3) {
    h = h * 3 + 1
  }

  function swap(nums: number[], i: number, j: number) {
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
  }
  while (h >= 1) {
    for (let i = h; i < len; i++) {
      for (let j = i; j >= h && nums[j] < nums[j - h]; j -= h) {
        swap(nums, j, j - h)
      }
    }
    h = Math.floor(h / 3)
  }
  return nums
}

console.log(sortArray([5, 1, 7, 4, 3, 9, 2]))
