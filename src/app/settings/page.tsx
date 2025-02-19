import Navbar from "@/components/navbarWithSlider";
import { SettingsPanel } from "@/components/SettingsPanel";

export default function Home() {
	return (
		<main className="flex flex-col min-h-screen bg-gray-100">
			<Navbar activeRoute="/settings" />
			<div className="flex flex-col md:flex-row flex-grow p-4 gap-4">
				<SettingsPanel />
			</div>
		</main>
	);
}
