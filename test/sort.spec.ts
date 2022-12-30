import { sortArrayForRedix } from './../sort/redix_sort/index'
import { countingSortArray } from './../sort/counting_sort/index'
import sortArrayForBucket from '../sort/bucket_sort'
import heap_sort from '../sort/heap_sort'
import mergeSortArr from '../sort/mergeSort'
import shellSort from '../sort/shellSort'
describe('sort', () => {
  // 堆排序
  it('heap_sort', () => {
    expect(heap_sort([2, 3, 45, 2, 3, 4, 1])).toStrictEqual(
      [1, 2, 2, 3, 3, 4, 45]
    )
  })
  // 桶排序
  it('bucket_sort', () => {
    expect(
      sortArrayForBucket([2, 3, 45, 2, 3, 4, 1], 3)
    ).toStrictEqual([1, 2, 2, 3, 3, 4, 45])
  })
  // 计数排序
  it('counting_sort', () => {
    expect(
      countingSortArray([2, 3, 45, 2, 3, 4, 1])
    ).toStrictEqual([1, 2, 2, 3, 3, 4, 45])
  })

  // 归并排序
  it('merge_sort', () => {
    expect(
      mergeSortArr([2, 3, 45, 2, 3, 4, 1])
    ).toStrictEqual([1, 2, 2, 3, 3, 4, 45])
  })
  // 基数排序
  it('redix_sort', () => {
    expect(
      sortArrayForRedix([2, 3, 45, 2, 3, 4, 1])
    ).toStrictEqual([1, 2, 2, 3, 3, 4, 45])
  })
  // 希尔排序
  it('shell_sort', () => {
    expect(shellSort([2, 3, 45, 2, 3, 4, 1])).toStrictEqual(
      [1, 2, 2, 3, 3, 4, 45]
    )
  })
})
