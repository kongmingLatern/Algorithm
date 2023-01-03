import { TreeNode } from '../../utils'
export function levelOrder(
  root: TreeNode | null
): number[] {
  let result: number[] = []
  let queue: TreeNode[] = []

  if (!root) return []

  queue.push(root)

  while (queue.length !== 0) {
    let node = queue.shift()
    result.push(node!.val)

    if (node!.left) queue.push(node!.left)
    if (node!.right) queue.push(node!.right)
  }
  return result
}
