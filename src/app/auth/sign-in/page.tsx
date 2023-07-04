"use client";

import { ButtonLink, ButtonSubmit } from "@/widgets/button";
import { InputEmail, InputPassword } from "@/widgets/input";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function () {
	// component hooks
	const appRouter = useRouter();
	const signInForm = useForm<{
		email: string;
		password: string;
	}>();

	// component logic
	const [isLoading, setIsLoading] = useState(false);

	const openSignUp = () => appRouter.replace("/auth/sign-up");
	const submitForm = () => {
		setTimeout(() => setIsLoading(true), 0);
		setTimeout(() => setIsLoading(false), 2000);

		console.log(signInForm.getValues());
	};

	// component layout
	return (
		<div className="card lg:border lg:shadow-xl">
			<section className="card-body items-center">
				<h2 className="card-title mb-2 text-4xl">Sign In</h2>
				<form
					className="card-actions flex-col gap-2 items-stretch w-64"
					onSubmit={signInForm.handleSubmit(submitForm)}
				>
					<InputEmail
						label="Email"
						value={signInForm.register("email", {
							required: true,
						})}
					/>
					<InputPassword
						label="Password"
						value={signInForm.register("password", {
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
		</div>
	);
}
