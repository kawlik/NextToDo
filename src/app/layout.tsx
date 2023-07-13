"use client";

import { Metadata } from "next";
import "./layout.css";

export const metadata: Metadata = {
	title: "NextJS ToDo App",
	viewport: "initial-scale=1, width=device-width, viewport-fit=cover",
};

export default function (props: React.PropsWithChildren) {
	// component logic

	// component layout
	return (
		<html data-theme="emerald" lang="en">
			<body className="h-screen w-screen overflow-hidden">{props.children}</body>
		</html>
	);
}
