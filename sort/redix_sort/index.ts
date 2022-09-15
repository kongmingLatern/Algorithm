const sortArrayForRedix = (nums: number[]) => {
  const len = nums.length
  if (len < 2) {
    return nums
  }

  // 获取 nums 中的最大值
  let max = Math.max.apply(null, nums)

  // 计算最大位数
  let maxDigit = 1
  while ((max = Math.floor(max / 10))) {
    maxDigit++
  }

  let mod = 10
  let dev = 1
  for (let i = 0; i < maxDigit; i++) {
    let count: number[][] = []
    for (let j = 0; j < len; j++) {
      let bucket = Math.floor((nums[j] % mod) / dev)
      if (count[bucket]) {
        count[bucket].push(nums[j])
      } else {
        count[bucket] = [nums[j]]
      }
    }
    let pos = 0
    for (let j = 0; j < count.length; j++) {
      let value: number | undefined
      if (count[j]) {
        while ((value = count[j].shift()) != null) {
          nums[pos++] = value
        }
      }
    }
    dev *= 10
    mod *= 10
  }
  return nums
}

console.log(sortArrayForRedix([0, 50, 5, 2, 131]))
