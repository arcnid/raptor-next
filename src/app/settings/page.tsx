import Navbar from "@/components/navbarWithSlider";
import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";

export default function Home() {
	return (
		<main
			className="flex flex-col min-h-screen"
			style={{ backgroundColor: "#F4F2F0" }}
		>
			<Navbar activeRoute="/settings" />
			<div className="flex flex-col md:flex-row flex-grow"></div>
		</main>
	);
}
