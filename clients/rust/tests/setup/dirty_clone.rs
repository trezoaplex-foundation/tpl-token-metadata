use trezoa_sdk::signature::Keypair;

pub trait DirtyClone {
    fn dirty_clone(&self) -> Self;
}

itpl DirtyClone for Keypair {
    fn dirty_clone(&self) -> Self {
        Keypair::new_from_array(*self.secret_bytes())
    }
}
