export default function heap_sort(nums: number[]) {
  const len = nums.length
  if (len < 2) {
    return nums
  }

  // 构建大顶堆
  for (let i = Math.floor(len / 2) - 1; i >= 0; i--) {
    max_heapify(nums, i, len)
  }

  // 堆排序
  for (let i = len - 1; i > 0; i--) {
    swap(nums, 0, i)
    max_heapify(nums, 0, i)
  }

  return nums
}

function max_heapify(nums, start, end) {
  let parentIndex = start,
    sonIndex = 2 * parentIndex + 1

  if (sonIndex >= end) {
    return
  }

  // 左节点 < 右节点
  if (sonIndex + 1 < end && nums[sonIndex] < nums[sonIndex + 1]) {
    sonIndex++
  }

  if (nums[parentIndex] < nums[sonIndex]) {
    swap(nums, parentIndex, sonIndex)
    max_heapify(nums, sonIndex, end)
  }
}

function swap(nums: number[], i: number, j: number) {
  ;[nums[i], nums[j]] = [nums[j], nums[i]]
}

console.log(heap_sort([1, 4, 5, 6, 1, 2, 3]))
