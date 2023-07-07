"use client";

import { useAuthContext } from "@/contexts/auth";
import { ButtonLink, ButtonSubmit } from "@/widgets/button";
import { InputEmail, InputPassword } from "@/widgets/input";
import { ModalWarning } from "@/widgets/modal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function () {
	// component hooks
	const router = useRouter();
	const auth = useAuthContext();
	const form = useForm<{
		email: string;
		password: string;
	}>();

	// component logic
	const [isLoading, setIsLoading] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	const hideModal = () => setIsVisible(false);
	const showModal = () => setIsVisible(true);

	const openSignUp = () => router.replace("/auth/sign-up");
	const submitForm = () => {
		const values = form.getValues();
		setIsLoading(true);

		auth.signIn(values.email, values.password).catch(() => {
			setIsLoading(false);
			setIsVisible(true);
		});
	};

	// component layout
	return (
		<div className="card lg:border lg:shadow-xl">
			<section className="card-body items-center">
				<h2 className="card-title mb-2 text-4xl">Sign In</h2>
				<form
					className="card-actions flex-col gap-2 items-stretch w-64"
					onSubmit={form.handleSubmit(submitForm)}
				>
					<InputEmail
						label="Email"
						value={form.register("email", {
							required: true,
						})}
					/>
					<InputPassword
						label="Password"
						value={form.register("password", {
							required: true,
						})}
					/>
					<ButtonSubmit label="Submit" loading={isLoading} />
				</form>
				<div className="divider">OR</div>
				<nav className="card-actions items-center">
					<ButtonLink action={openSignUp} label="Create new account" />
				</nav>
			</section>
			<ModalWarning hide={hideModal} open={isVisible} text="Invalid credentials!">
				<p className="text-lg">Make sure that:</p>
				<ul className="list-disc pl-8">
					<li className="list-item">The email address is correct.</li>
					<li className="list-item">The password has 8 characters.</li>
					<li className="list-item">You have an active account.</li>
				</ul>
			</ModalWarning>
		</div>
	);
}
