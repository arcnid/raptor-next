import Navbar from "@/components/navbarWithSlider";
import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen bg-gray-100">
			<Navbar activeRoute="/" />
			<div className="flex flex-col md:flex-row flex-grow p-4 gap-4">
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
