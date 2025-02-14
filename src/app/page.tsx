import Navbar from "@/components/navbarWithSlider";
import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";

export default function Home() {
	return (
		<main
			className="flex flex-col min-h-screen"
			style={{ backgroundColor: "#F4F2F0" }}
		>
			<Navbar />
			<div className="flex flex-col md:flex-row flex-grow">
				<div className="w-full md:w-3/5">
					<LeftPanel />
				</div>
				<div className="w-full md:w-2/5">
					<RightPanel />
				</div>
			</div>
		</main>
	);
}
