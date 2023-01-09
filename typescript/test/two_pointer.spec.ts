import { getIntersectionNode } from '../two_pointer/method1'
import { ListNode } from '../utils'

describe('method1', () => {
  it('shoule return 8', () => {
    // 4,1,8,4,5
    const head1 = new ListNode(
      4,
      new ListNode(
        1,
        new ListNode(
          8,
          new ListNode(4, new ListNode(5, null))
        )
      )
    )
    // 5,0,1,8,4,5
    const head2 = new ListNode(
      5,
      new ListNode(
        0,
        new ListNode(
          1,
          new ListNode(
            8,
            new ListNode(4, new ListNode(5, null))
          )
        )
      )
    )
    // TODO: BUG
    expect(getIntersectionNode(head1, head2)).toBe(null)
  })
})
