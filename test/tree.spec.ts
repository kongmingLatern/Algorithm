import { levelOrder } from '../tree/print/bfs'
import { TreeNode } from '../utils'

describe('bfs levelOrder', () => {
  it('should return [3,9,20,null,null,15,7]', () => {
    const root = new TreeNode(3)
    root.left = new TreeNode(9)
    root.right = new TreeNode(20)
    root.right.left = new TreeNode(15)
    root.right.right = new TreeNode(7)
    expect(levelOrder(root)).toEqual([3, 9, 20, 15, 7])
  })
})
