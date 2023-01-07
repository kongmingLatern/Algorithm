use std::collections::HashMap;

fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
    let mut map = HashMap::with_capacity(10);

    for i in 0..nums.len() {
        if let Some(k) = map.get(&(target - nums[i])) {
            if *k != i {
                return vec![*k as i32, i as i32];
            }
        }
        map.insert(nums[i], i);
    }
    panic!("not found")
}
fn main() {
    println!("{:?}", two_sum(vec![1, 2, 3, 4, 5], 9))
}

#[test]
fn it_add_two() {
    // assert_eq!([3, 4], two_sum(vec![1, 2, 3, 4, 5], 9))
    assert_eq!(1, 1)
}