#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode {
            next: None,
            val,
        }
    }
}

impl Solution {
    pub fn delete_node(head: Option<Box<ListNode>>, val: i32) -> Option<Box<ListNode>> {
        let mut root = head;
        let mut head = &mut root;
        while let Some(node) = head {
            if node.val == val {
                *head = node.next.take();
                break;
            }
            head = &mut head.as_mut().unwrap().next;
        }
        root
    }
}
fn main() {
    Solution::delete_node(Box::new(ListNode::new(10)), 10);
}