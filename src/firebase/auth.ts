import { firebaseAuth } from "./app";
import {
	UserCredential,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";

export function logout(): Promise<void> {
	return signOut(firebaseAuth);
}

export function signIn(email: string, password: string): Promise<UserCredential> {
	return signInWithEmailAndPassword(firebaseAuth, email, password);
}

export function signUp(email: string, password: string): Promise<UserCredential> {
	return createUserWithEmailAndPassword(firebaseAuth, email, password);
}
