import { TreeNode } from '../../utils'

function check(
  p: TreeNode | null,
  q: TreeNode | null
): boolean {
  if (!p && !q) return true
  if (!p || !q) return false

  return (
    p.val === q.val &&
    check(p.left, q.right) &&
    check(p.right, q.left)
  )
}

export function symmetry(root): boolean {
  return check(root, root)
}
