import { FaInfo, FaTriangleExclamation } from "react-icons/fa6";
import { ButtonLight } from "./button";

export function ModalInfo(
	props: React.PropsWithChildren & {
		hide(): void;
		open: boolean;
		text: string;
	}
) {
	// component logic

	// component layout
	return (
		<dialog className=" backdrop-blur modal max-w-sm" open={props.open}>
			<div className="modal-box relative">
				<section className="alert alert-info flex flex-nowrap gap-2">
					<FaInfo />
					<span className="font-bold">Info: {props.text}</span>
				</section>
				<section className="modal-middle my-2">{props.children}</section>
				<section className="flex flex-col mx-auto w-48">
					<ButtonLight action={props.hide} label="OK" />
				</section>
			</div>
		</dialog>
	);
}

export function ModalWarning(
	props: React.PropsWithChildren & {
		hide(): void;
		open: boolean;
		text: string;
	}
) {
	// component logic

	// component layout
	return (
		<dialog className="backdrop-blur modal" open={props.open}>
			<div className="modal-box relative max-w-sm">
				<section className="alert alert-warning flex flex-nowrap gap-2">
					<FaTriangleExclamation />
					<span className="font-bold">Warning: {props.text}</span>
				</section>
				<section className="modal-middle p-2 my-2">{props.children}</section>
				<section className="flex flex-col mx-auto w-48">
					<ButtonLight action={props.hide} label="OK" />
				</section>
			</div>
		</dialog>
	);
}
