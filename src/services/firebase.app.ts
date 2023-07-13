import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

export const firebaseApp = initializeApp({
	apiKey: "AIzaSyCL5W1KFdiDLnHh3Ag39AoEiBRwXSWP-D8",
	authDomain: "fir-next-todo-7d702.firebaseapp.com",
	projectId: "fir-next-todo-7d702",
	storageBucket: "fir-next-todo-7d702.appspot.com",
	messagingSenderId: "830210997404",
	appId: "1:830210997404:web:d0a07f6735ae2407a44159",
});

export const firebaseAuth = getAuth(firebaseApp);
export const firebaseData = getFirestore(firebaseApp);
