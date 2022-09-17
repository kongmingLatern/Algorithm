function sortArrayForBuckjet(nums: number[], size: number) {
  const len = nums.length
  if (len < 2) {
    return nums
  }

  let max = Math.max.apply(null, nums)
  let min = Math.min.apply(null, nums)

  const buckets: number[][] = []

  size ||= 3

  // 需要桶的个数
  const bucketCount = Math.floor((max - min) / 3) + 1

  nums.forEach(item => {
    const j = ~~((item - min) / size)
    if (buckets[j]) {
      buckets[j].push(item)
    } else {
      buckets[j] = [item]
    }
  })

  nums = []
  for (let i = 0; i < bucketCount; i++) {
    if (buckets[i]) {
      insertSort(buckets[i])
      nums = nums.concat(buckets[i])
    }
  }

  return nums
}
const insertSort = function (nums) {
  let len = nums.length
  if (len === 1) {
    return nums
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0 && nums[j] < nums[j - 1]; j--) {
      swap(nums, j, j - 1)
    }
  }

  return nums
}

function swap(a, i, j) {
  ;[a[i], a[j]] = [a[j], a[i]]
}

console.log(sortArrayForBuckjet([5, 1, 23, 45, 4, 5, 1], 3))
