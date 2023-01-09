#[warn(dead_code)]
#[derive(Clone, Debug)]
struct ListNode {
    val: i32,
    next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode {
            val,
            next: None,
        }
    }
}
struct Solution {}
impl Solution {
    pub fn get_kth_from_end(head: Option<Box<ListNode>>, k: i32) -> Option<Box<ListNode>> {
        let mut slow = &head;
        let mut fast = &head;

        for _ in 0..k {
            fast = &fast.as_ref().unwrap().next;
        }

        while fast.is_some() {
            fast = &fast.as_ref().unwrap().next;
            slow = &slow.as_ref().unwrap().next;
        }

        slow.clone()
    }
}

fn main() {
    println!("The first ListNode: {:?}", ListNode::new(10));
    Solution::get_kth_from_end(Some(Box::new(ListNode::new(10))), 10);
}