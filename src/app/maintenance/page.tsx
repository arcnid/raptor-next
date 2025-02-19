import Navbar from "@/components/navbarWithSlider";
import { MaintenancePanel } from "@/components/MaintenancePanel";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen bg-gray-100">
			<Navbar activeRoute="/maintenance" />
			<div className="flex flex-col md:flex-row flex-grow p-4 gap-4">
				<MaintenancePanel />
			</div>
		</main>
	);
}
