import create from 'zustand';
const Usestore = create((set) => ({
    name: '',
    email: '',
    image: '',
    logout: '',
    setName: (name) => set({ name }),
    setEmail: (email) => set({ email }),
    setImage: (image) => set({ image }),
    setlogout: (logout) => set({ logout }),
}));

export default Usestore