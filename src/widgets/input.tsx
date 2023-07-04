import { UseFormRegisterReturn } from "react-hook-form";

export function InputEmail(props: { label: string; value: UseFormRegisterReturn }) {
	// component logic

	// component layout
	return (
		<input
			{...props.value}
			className={`bg-neutral-200 input input-bordered`}
			placeholder={props.label}
			type="email"
		/>
	);
}

export function InputPassword(props: { label: string; value: UseFormRegisterReturn }) {
	// component logic

	// component layout
	return (
		<input
			{...props.value}
			className={`bg-neutral-200 input input-bordered`}
			placeholder={props.label}
			type="password"
		/>
	);
}
