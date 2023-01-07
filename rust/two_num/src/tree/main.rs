use std::rc::Rc;
use std::cell::RefCell;
impl Solution {
    pub fn is_symmetric(root: Option<Rc<RefCell<TreeNode>>>) -> bool {
        if root == None {
            return true;
        }
        let rb = root.as_ref().unwrap().borrow_mut();
        Solution::check(rb.left.clone(), rb.right.clone())
    }
    pub fn check(p: Option<Rc<RefCell<TreeNode>>>, q: Option<Rc<RefCell<TreeNode>>>) -> bool {
        if p == None && q == None {
            return true;
        }
        if p == None || q == None {
            return false;
        }
        let rp = p.as_ref().unwrap().borrow_mut();
        let rq = q.as_ref().unwrap().borrow_mut();
        rp.val == rq.val &&
            Solution::check(rp.left.clone(), rq.right.clone()) &&
            Solution::check(rp.right.clone(), rq.left.clone())
    }
}