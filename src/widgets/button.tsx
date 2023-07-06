export function ButtonLink(props: { action(): void; label: string }) {
	// component logic

	// component layout
	return (
		<button className="btn-link normal-case" onClick={props.action} type="button">
			{props.label}
		</button>
	);
}

export function ButtonLight(props: { action(): void; label: string }) {
	// component logic

	// component layout
	return (
		<button className="btn normal-case" onClick={props.action} type="button">
			{props.label}
		</button>
	);
}

export function ButtonNeutral(props: { action(): void; label: string }) {
	// component logic

	// component layout
	return (
		<button className="btn btn-neutral normal-case" onClick={props.action} type="button">
			{props.label}
		</button>
	);
}

export function ButtonPrimary(props: { action(): void; label: string }) {
	// component logic

	// component layout
	return (
		<button className="btn btn-primary normal-case" onClick={props.action} type="button">
			{props.label}
		</button>
	);
}

export function ButtonSubmit(props: { label: string; loading: boolean }) {
	// component logic

	// component layout
	return (
		<button
			className="btn btn-primary mx-auto normal-case relative w-2/3"
			disabled={props.loading}
		>
			{props.loading && <span className="absolute loading loading-dots text-primary" />}
			{props.label}
		</button>
	);
}
