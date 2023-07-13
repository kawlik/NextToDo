export function PageButtonOutline(props: { action(): void; label: string }) {
	// component logic

	// component layout
	return (
		<button className="btn btn-outline normal-case" onClick={props.action} type="button">
			{props.label}
		</button>
	);
}

export function PageButtonPrimary(props: { action(): void; label: string }) {
	// component logic

	// component layout
	return (
		<button className="btn btn-primary normal-case" onClick={props.action} type="button">
			{props.label}
		</button>
	);
}
