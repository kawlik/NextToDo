"use client";

import { ButtonLink, ButtonSubmit } from "@/widgets/button";
import { InputEmail, InputPassword } from "@/widgets/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function () {
	// component hooks
	const router = useRouter();

	// component logic
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");
	const [isLocked, setIsLocked] = useState(false);
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [passwordProvide, setPasswordProvide] = useState("");

	const openSignIn = () => router.replace("/auth/sign-in");
	const submitForm = (e: React.FormEvent) => {
		e.preventDefault();

		setTimeout(() => setIsLocked(true), 0);
		setTimeout(() => setIsLocked(false), 2000);
	};

	// component layout
	return (
		<div className="card lg:border lg:shadow-xl">
			<section className="card-body items-center">
				<h2 className="card-title mb-2 text-4xl">Sign Up</h2>
				<form
					className="card-actions flex-col gap-2 items-stretch w-64"
					onSubmit={submitForm}
				>
					<InputEmail action={setEmail} label="Email" />
					<InputPassword action={setPasswordProvide} label="Provide password" />
					<InputPassword action={setPasswordConfirm} label="Confirm password" />
					<ButtonSubmit label="Submit" loading={isLocked} />
				</form>
				<div className="divider">OR</div>
				<nav className="card-actions items-center">
					<ButtonLink action={openSignIn} label="Use an existing account" />
				</nav>
			</section>
		</div>
	);
}
