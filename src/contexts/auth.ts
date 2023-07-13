import { logout, onAuthChange } from "@/services/firebase.auth";
import { User } from "firebase/auth";
import { create } from "zustand";

export const useAuthContext = create<{
	user: User | null;
	logout(): Promise<void>;
}>(() => ({
	user: null,
	logout: logout,
}));

onAuthChange((user) => useAuthContext.setState(() => ({ user })));
