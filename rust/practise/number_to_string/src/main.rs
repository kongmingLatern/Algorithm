impl Solution {
    pub fn translate_num(num: i32) -> i32 {
        let nums = num
            .to_string()
            .bytes()
            .map(|c| c - b'0')
            .collect::<Vec<_>>();
        let (mut a, mut b) = (1, 1);
        nums.windows(2).for_each(|n| {
            if n[0] == 1 || (n[0] == 2 && n[1] <= 5) {
                b += a;
                a = b - a;
            } else {
                a = b;
            }
        });
        b
    }
}
fn main() {
    Solution::translate_num(12258); // 5
    // 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
}