const countingSortArray_2 = (nums: number[]) => {
  const len = nums.length
  if (len < 2) {
    return nums
  }
  let max = nums[0]
  let min = nums[0]
  // 获取最大和最小项
  for (let i = 0; i < len; i++) {
    if (min > nums[i]) {
      min = nums[i]
    } else if (max < nums[i]) {
      max = nums[i]
    }
  }
  const count: number[] = new Array(max - min + 1)
  for (let i = 0; i < len; i++) {
    const j = nums[i] - min
    if (count[j]) {
      count[j]++
    } else {
      count[j] = 1
    }
  }

  const res: number[] = []
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      res.push(i + min)
      count[i]--
    }
  }
  return res
}

console.log(countingSortArray_2([5, 1, 3, 9, 2, 4]))
