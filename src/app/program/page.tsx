import Navbar from "@/components/navbarWithSlider";
import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";
import { ProgramPanel } from "@/components/ProgramPanel";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen bg-gray-100">
			<Navbar activeRoute="/program" />
			<div className="flex flex-col md:flex-row flex-grow p-4 gap-4">
				<ProgramPanel />
			</div>
		</main>
	);
}
