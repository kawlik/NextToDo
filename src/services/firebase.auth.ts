import { firebaseAuth } from "./firebase.app";
import { NextOrObserver, Unsubscribe, User, onAuthStateChanged, signOut } from "firebase/auth";

export function logout(): Promise<void> {
	return signOut(firebaseAuth);
}

export function onAuthChange(callback: NextOrObserver<User>): Unsubscribe {
	return onAuthStateChanged(firebaseAuth, callback);
}
