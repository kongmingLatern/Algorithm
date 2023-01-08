fn main() {}
#[cfg(test)]
fn test_str_byte() {
    let mut bytes = "bors".bytes();
    assert_eq!(Some(b'b'), bytes.next());
    assert_eq!(Some(b'o'), bytes.next());
    assert_eq!(Some(b'r'), bytes.next());
    assert_eq!(Some(b's'), bytes.next());
    assert_eq!(None, bytes.next());
}