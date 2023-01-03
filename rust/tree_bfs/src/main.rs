#[derive(Debug, PartialEq, Eq)]
pub struct TreeNode {
    pub val: i32,
    pub left: Option<Rc<RefCell<TreeNode>>>,
    pub right: Option<Rc<RefCell<TreeNode>>>,
}

impl TreeNode {
    #[inline]
    pub fn new(val: i32) -> Self {
        TreeNode {
            val,
            left: None,
            right: None,
        }
    }
}

use std::rc::Rc;
use std::cell::RefCell;
use std::collections::VecDeque;

fn level_order(root: Option<Rc<RefCell<TreeNode>>>) -> Vec<i32> {
    let mut res = Vec::new();
    let mut queue = VecDeque::new();

    if let Some(node) = root {
        queue.push_back(node.clone());
    }

    while let Some(node) = queue.pop_front() {
        res.push(node.borrow().val);
        if let Some(left) = node.borrow().left.clone() {
            queue.push_back(left);
        }
        if let Some(right) = node.borrow().right.clone() {
            queue.push_back(right);
        }
    }
    res
}
fn main() {
    let result = level_order(Some(Rc::new(RefCell::new(TreeNode::new(3)))));
    println!("{:?}", result);
}