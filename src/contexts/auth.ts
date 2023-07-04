import { logout, signIn, signUp } from "@/firebase/auth";
import { User, UserCredential } from "firebase/auth";
import { create } from "zustand";

export const useAuthContext = create<{
	user: User | null;
	logout(): Promise<void>;
	signIn(email: string, password: string): Promise<UserCredential>;
	signUp(email: string, password: string): Promise<UserCredential>;
}>(() => ({
	user: null,
	logout: logout,
	signIn: signIn,
	signUp: signUp,
}));
