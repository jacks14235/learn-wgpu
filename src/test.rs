use random::random;

fn main() {
    let rands: &mut [u8; 4];
    random::random(rands);
    let inty = rands as u32;
    println!("inty: {}", inty);
    let floaty = inty as f32;
    println!("floaty: {}", floaty);
    // let inty = rands as u32;
    // println!("inty: {}", inty);
}


