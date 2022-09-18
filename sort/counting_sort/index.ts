export const countingSortArray = (nums: number[]) => {
  const len = nums.length
  if (len < 2) {
    return nums
  }
  const count: number[] = []
  for (let i = 0; i < len; i++) {
    const j = nums[i]
    if (count[j]) {
      count[j]++
    } else {
      count[j] = 1
    }
  }

  const res: number[] = []
  for (let i = 0; i < count.length; i++) {
    while (count[i] > 0) {
      res.push(i)
      count[i]--
    }
  }
  return res
}

console.log(countingSortArray([5, 1, 3, 9, 2, 4]))
