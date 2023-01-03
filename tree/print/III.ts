import { TreeNode } from '../../utils'

export function levelOrder(
  root: TreeNode | null
): number[][] {
  if (!root) return []
  const result: number[][] = []
  const queue: TreeNode[] = [root]
  let count = 0
  while (queue.length) {
    const length = queue.length
    const arr: number[] = []
    for (let i = 0; i < length; i++) {
      const cur: TreeNode = queue.shift() as TreeNode
      arr.push(cur.val)
      cur.left && queue.push(cur.left)
      cur.right && queue.push(cur.right)
    }
    result.push(count % 2 ? arr.reverse() : arr)
    count++
  }
  return result
}
