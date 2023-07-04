import { firebaseAuth } from "./app";
import {
	NextOrObserver,
	Unsubscribe,
	User,
	UserCredential,
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

export function logout(): Promise<void> {
	return signOut(firebaseAuth);
}

export function onAuthChange(callback: NextOrObserver<User>): Unsubscribe {
	return onAuthStateChanged(firebaseAuth, callback);
}

export function signIn(email: string, password: string): Promise<UserCredential> {
	return signInWithEmailAndPassword(firebaseAuth, email, password);
}

export function signUp(email: string, password: string): Promise<UserCredential> {
	return createUserWithEmailAndPassword(firebaseAuth, email, password);
}
