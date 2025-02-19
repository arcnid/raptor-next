"use client";
import { useEffect, useRef, useState } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";
import { TrendingUp, Move, RotateCw } from "lucide-react";
import { SweepPosition } from "@/components/SweepPosition";

const data = [
	{ name: "9am", value: 400 },
	{ name: "11am", value: 1200 },
	{ name: "1pm", value: 3300 },
	{ name: "3pm", value: 4000 },
	{ name: "5pm", value: 8000 },
];

export default function RightPanel() {
	// State for sweep (offset and angle) and RPM (rotations per minute)
	const [sweepState, setSweepState] = useState({ x: 0, y: 0, angle: 0 });
	const [rpm, setRpm] = useState(0.1); // default 1 rotation per minute
	const rpmRef = useRef(rpm);

	// Ref for the Position accordion trigger
	const positionTriggerRef = useRef(null);

	// Update rpmRef whenever rpm changes (without resetting the timer)
	useEffect(() => {
		rpmRef.current = rpm;
	}, [rpm]);

	//use effect to open position on render
	useEffect(() => {
		//simulate button click of position so it displays on render
		if (positionTriggerRef.current) {
			// positionTriggerRef.current.click();
		}
	}, []);

	useEffect(() => {
		let rafId;
		const startTime = Date.now();

		const updateSweep = () => {
			const now = Date.now();
			const elapsed = (now - startTime) / 1000;
			// Use the current RPM (rotations per minute) stored in rpmRef
			// Compute how many full rotations have been made: elapsed * (rpm/60)
			// The fractional part multiplied by 360 gives the current angle.
			const angle = (((elapsed * rpmRef.current) / 60) % 1) * 360;

			// Compute a small offset for a subtle circular motion.
			const offsetRadius = 5; // pixels; adjust as needed
			const offsetX = Math.cos(angle * (Math.PI / 180)) * offsetRadius;
			const offsetY = Math.sin(angle * (Math.PI / 180)) * offsetRadius;

			setSweepState({ x: offsetX, y: offsetY, angle });
			rafId = requestAnimationFrame(updateSweep);
		};

		rafId = requestAnimationFrame(updateSweep);
		return () => cancelAnimationFrame(rafId);
	}, []);

	return (
		<div className="p-6" style={{ marginTop: 0 }}>
			{/* The parent's offset is applied to the entire panel */}
			<div
				style={{
					transform: `translate(${sweepState.x}px, ${sweepState.y}px)`,
				}}
			>
				<Accordion type="single" collapsible className="w-full space-y-4">
					<AccordionItem
						value="item-1"
						className="border rounded-lg overflow-hidden card-shadow shadow-md"
					>
						<AccordionTrigger className="flex justify-between p-4 hover:bg-gray-50">
							<div className="flex items-center">
								<TrendingUp size={24} className="mr-2 text-blue-500" />
								<span>Throughput</span>
							</div>
							<span className="text-right font-bold">8,000 bu/hr</span>
						</AccordionTrigger>
						<AccordionContent className="p-4">
							<ResponsiveContainer width="100%" height={300}>
								<LineChart data={data}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip />
									<Line
										type="monotone"
										dataKey="value"
										stroke="#3b82f6"
										strokeWidth={2}
									/>
								</LineChart>
							</ResponsiveContainer>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value="item-2"
						className="border rounded-lg overflow-hidden card-shadow shadow-md"
					>
						<AccordionTrigger
							ref={positionTriggerRef} // Added ref here
							className="flex justify-between p-4 hover:bg-gray-50"
						>
							<div className="flex items-center">
								<Move size={24} className="mr-2 text-green-500" />
								<span>Position</span>
							</div>
							<span className="text-right font-bold">
								{sweepState.angle ? `${Math.round(sweepState.angle)}°` : "0°"} -
								Running
							</span>
						</AccordionTrigger>
						<AccordionContent className="p-4">
							<ResponsiveContainer width="100%" height={300}>
								<div className="flex flex-col items-center justify-center">
									{/* Pass the current sweep state to the display-only SweepPosition */}
									<SweepPosition sweepState={sweepState} />
								</div>
							</ResponsiveContainer>
						</AccordionContent>
					</AccordionItem>
					<AccordionItem
						value="item-3"
						className="border rounded-lg overflow-hidden card-shadow shadow-md"
					>
						<AccordionTrigger className="flex justify-between p-4 hover:bg-gray-50">
							<div className="flex items-center">
								<RotateCw size={24} className="mr-2 text-purple-500" />
								<span>Chain RPM</span>
							</div>
							<span className="text-right font-bold">20 rpm</span>
						</AccordionTrigger>
						<AccordionContent className="p-4">
							<ResponsiveContainer width="100%" height={300}>
								<LineChart data={data} style={{ width: "100%" }}>
									<CartesianGrid strokeDasharray="3 3" />
									<XAxis dataKey="name" />
									<YAxis />
									<Tooltip />
									<Line
										type="monotone"
										dataKey="value"
										stroke="#8b5cf6"
										strokeWidth={2}
									/>
								</LineChart>
							</ResponsiveContainer>
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
}
