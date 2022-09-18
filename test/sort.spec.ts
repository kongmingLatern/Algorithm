import { describe, expect, it } from 'vitest'
import sortArrayForBucket from '../sort/bucket_sort'
import heap_sort from '../sort/heap_sort'
describe('sort', () => {
  // 堆排序
  it('heap_sort', () => {
    expect(heap_sort([2, 3, 45, 2, 3, 4, 1])).toStrictEqual([1, 2, 2, 3, 3, 4, 45])
  })
  // 桶排序
  it('bucket_sort', () => {
    expect(sortArrayForBucket([2, 3, 45, 2, 3, 4, 1], 3)).toStrictEqual([1, 2, 2, 3, 3, 4, 45])
  })
})
