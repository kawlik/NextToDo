"use client";

import { PageBannerWelcome } from "./page.banner";
import { PageButtonOutline, PageButtonPrimary } from "./page.button";

export default function () {
	// component logic

	// component layout
	return (
		<div className="card items-center">
			<figure className="overflow-hidden pt-10 px-10">
				<PageBannerWelcome width={320} height={320} />
			</figure>
			<section className="card-body items-stretch w-72">
				<PageButtonPrimary action={() => {}} label="Sign In" />
				<PageButtonOutline action={() => {}} label="Therms of Service" />
			</section>
		</div>
	);
}
