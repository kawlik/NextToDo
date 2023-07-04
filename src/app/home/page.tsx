"use client";

import { useAuthContext } from "@/contexts/auth";
import { ButtonLink } from "@/widgets/button";

export default function () {
	// component hooks
	const auth = useAuthContext();

	// component logic

	// component layout
	return (
		<div className="flex flex-col">
			<h2 className="text-4xl">Home</h2>
			<ButtonLink action={auth.logout} label="Logout" />
		</div>
	);
}
