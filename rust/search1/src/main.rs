use std::collections::HashMap;

fn main() {
    fn first_uniq_char(s: String) -> char {
        let mut map = HashMap::new();
        let s = s.chars().collect::<Vec<_>>();
        s.iter().for_each(|c| {
            *map.entry(c).or_insert(0) += 1;
        });
        if let Some(&c) = s.iter().find(|&c| map[c] == 1) {
            c
        } else {
            ' '
        }
    }

    let s = "leetcode".to_string();
    println!("{}", first_uniq_char(s));
}