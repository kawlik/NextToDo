import { Metadata } from "next";
import "./layout.css";

export const metadata: Metadata = {
	title: "NextJS ToDo App",
	viewport: "initial-scale=1, width=device-width, viewport-fit=cover",
};

export default function ({ children }: React.PropsWithChildren) {
	// component logic

	// component layout
	return (
		<html data-theme="emerald" lang="en">
			<body children={children} className="h-screen w-screen overflow-hidden" />
		</html>
	);
}
