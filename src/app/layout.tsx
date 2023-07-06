"use client";

import { useAuthContext } from "@/contexts/auth";
import { Metadata } from "next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "./layout.css";

export const metadata: Metadata = {
	title: "NextJS ToDo App",
	viewport: "initial-scale=1, width=device-width, viewport-fit=cover",
};

export default function ({ children }: React.PropsWithChildren) {
	// component hooks
	const router = useRouter();
	const auth = useAuthContext();

	// component logic
	useEffect(() => {
		// if (auth.user === null) {
		// 	router.push("/auth");
		// } else {
		// 	router.push("/home");
		// }
	}, [auth.user]);

	// component layout
	return (
		<html data-theme="emerald" lang="en">
			<body children={children} className="h-screen w-screen overflow-hidden" />
		</html>
	);
}
