export default function (props: React.PropsWithChildren) {
	// component logic

	// component layout
	return (
		<main className="flex items-center justify-center w-full h-full ">
			{props.children}
		</main>
	);
}
