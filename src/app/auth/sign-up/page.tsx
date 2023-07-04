"use client";

import { ButtonLink, ButtonSubmit } from "@/widgets/button";
import { InputEmail, InputPassword } from "@/widgets/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function () {
	// component hooks
	const appRouter = useRouter();
	const signUpForm = useForm<{
		email: string;
		passwordCreate: string;
		passwordRepeat: string;
	}>();

	// component logic
	const [isLoading, setIsLoading] = useState(false);

	const openSignIn = () => appRouter.replace("/auth/sign-in");
	const submitForm = () => {
		setTimeout(() => setIsLoading(true), 0);
		setTimeout(() => setIsLoading(false), 2000);

		console.log(signUpForm.getValues());
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
					<InputEmail
						label="Email"
						value={signUpForm.register("email", {
							required: true,
						})}
					/>
					<InputPassword
						label="Provide password"
						value={signUpForm.register("passwordCreate", {
							required: true,
						})}
					/>
					<InputPassword
						label="Confirm password"
						value={signUpForm.register("passwordRepeat", {
							required: true,
						})}
					/>
					<ButtonSubmit label="Submit" loading={isLoading} />
				</form>
				<div className="divider">OR</div>
				<nav className="card-actions items-center">
					<ButtonLink action={openSignIn} label="Use an existing account" />
				</nav>
			</section>
		</div>
	);
}
