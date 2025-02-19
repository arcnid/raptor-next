"use client";
import { useState } from "react";
import Navbar from "@/components/navbarWithSlider";
import LeftPanel from "@/components/left-panel";
import RightPanel from "@/components/right-panel";

export default function Home() {
	// State to control whether the sweep is running.
	const [isRunning, setIsRunning] = useState(true);
	// A flag to indicate that a reset has been triggered.
	const [resetFlag, setResetFlag] = useState(false);

	// Callback for when reset is completed in RightPanel.
	const handleResetComplete = () => {
		setResetFlag(false);
	};

	return (
		<main className="flex flex-col min-h-screen bg-gray-100">
			<Navbar activeRoute="/" />
			<div className="flex flex-col md:flex-row flex-grow p-4 gap-4">
				<div className="w-full md:w-3/5">
					<LeftPanel
						isRunning={isRunning}
						onStart={() => setIsRunning(true)}
						onStop={() => setIsRunning(false)}
						onReset={() => {
							setIsRunning(false); // Stop the sweep
							setResetFlag(true); // Trigger a reset
						}}
					/>
				</div>
				<div className="w-full md:w-2/5">
					<RightPanel
						isRunning={isRunning}
						resetFlag={resetFlag}
						onResetComplete={handleResetComplete}
					/>
				</div>
			</div>
		</main>
	);
}
