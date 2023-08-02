import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useFirebaseUser } from "./useState";


export const createUser = async (email: string, password: string) => {
    const auth = getAuth();
    const createdUser = await createUserWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            console.log("err", error)
        });
    return createdUser;
}

export const signInUser = async (email: string, password: string) => {
    const auth = getAuth();
    const credentials = await signInWithEmailAndPassword(auth, email, password)
        .catch((error) => {
            console.log("err", error)
        });
    return credentials;
}

export const signOut = async () => {
    const auth = getAuth();
    const result = await auth.signOut();
    console.log("logut", result)
}

export const onUser = async () => {
    const auth = getAuth();
    const firebaseUser = useFirebaseUser();
    
    const router = useRouter();
    onAuthStateChanged(auth, (user) => {
        if(!user){
            router.push("/");
        }
        firebaseUser.value = user;
    })
       
}