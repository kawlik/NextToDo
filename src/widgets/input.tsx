export function InputEmail(props: { action(value: string): void; label: string }) {
	// component logic

	// component layout
	return (
		<input
			className="bg-neutral-200 input"
			onChange={(e) => props.action(e.target.value)}
			placeholder={props.label}
			type="email"
		/>
	);
}

export function InputPassword(props: { action(value: string): void; label: string }) {
	// component logic

	// component layout
	return (
		<input
			className="bg-neutral-200 input"
			onChange={(e) => props.action(e.target.value)}
			placeholder={props.label}
			type="password"
		/>
	);
}
