"use client";

import { BannerWelcome } from "@/widgets/banner";
import { ButtonNeutral, ButtonPrimary } from "@/widgets/button";
import { useRouter } from "next/navigation";

export default function () {
	// component hooks
	const router = useRouter();

	// component logic
	const openSignIn = () => router.push("/auth/sign-in");
	const openSignUp = () => router.push("/auth/sign-up");

	// component layout
	return (
		<div className="card lg:border lg:shadow-xl">
			<figure className="overflow-hidden pt-10 px-10">
				<BannerWelcome />
			</figure>
			<section className="card-body items-center">
				<nav className="card-actions flex-col gap-2 items-stretch w-64">
					<ButtonPrimary action={openSignIn} label="Sign In" />
					<ButtonNeutral action={openSignUp} label="Sign Up" />
				</nav>
			</section>
		</div>
	);
}
