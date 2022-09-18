import { describe, expect, it } from 'vitest'
import { countingSortArray } from './../sort/counting_sort/index'
import sortArrayForBucket from '../sort/bucket_sort'
import heap_sort from '../sort/heap_sort'
import mergeSortArr from '../sort/mergeSort'
describe('sort', () => {
  // 堆排序
  it('heap_sort', () => {
    expect(heap_sort([2, 3, 45, 2, 3, 4, 1])).toStrictEqual([1, 2, 2, 3, 3, 4, 45])
  })
  // 桶排序
  it('bucket_sort', () => {
    expect(sortArrayForBucket([2, 3, 45, 2, 3, 4, 1], 3)).toStrictEqual([1, 2, 2, 3, 3, 4, 45])
  })
  // 计数排序
  it('counting_sort', () => {
    expect(countingSortArray([2, 3, 45, 2, 3, 4, 1], 3)).toStrictEqual([1, 2, 2, 3, 3, 4, 45])
  })

  //
  it('merge_sort', () => {
    expect(mergeSortArr([2, 3, 45, 2, 3, 4, 1], 3)).toStrictEqual([1, 2, 2, 3, 3, 4, 45])
  })
})
