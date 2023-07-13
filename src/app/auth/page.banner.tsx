import Image from "next/image";

export function PageBannerWelcome(props: { width: number; height: number }) {
	// component logic

	// component layout
	return <Image alt="Welcome" src="welcome.svg" width={props.width} height={props.height} />;
}
