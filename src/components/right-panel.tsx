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

export default function RightPanel({
	isRunning,
	resetFlag,
	onResetComplete,
}: {
	isRunning: boolean;
	resetFlag: boolean;
	onResetComplete: () => void;
}) {
	// Displayed sweep state (angle and subtle offset)
	const [sweepState, setSweepState] = useState({ x: 0, y: 0, angle: 0 });
	// RPM for the sweep (default 0.1 rotations per minute)
	const [rpm] = useState(0.1);
	const rpmRef = useRef(rpm);

	// We'll store the current angle in this ref.
	const lastAngleRef = useRef(0);

	// To access the current isRunning value inside our animation loop,
	// we use a ref that gets updated when isRunning changes.
	const isRunningRef = useRef(isRunning);
	useEffect(() => {
		isRunningRef.current = isRunning;
	}, [isRunning]);

	// A ref for the position accordion trigger (if needed)
	const positionTriggerRef = useRef(null);

	// Reset logic: when resetFlag is true, clear the angle.
	useEffect(() => {
		if (resetFlag) {
			setSweepState({ x: 0, y: 0, angle: 0 });
			lastAngleRef.current = 0;
			onResetComplete();
		}
	}, [resetFlag, onResetComplete]);

	// The animation loop:
	useEffect(() => {
		let rafId: number;
		let lastTime = Date.now();

		const loop = () => {
			const now = Date.now();
			const dt = now - lastTime;
			lastTime = now;

			// Only update the angle if running.
			if (isRunningRef.current) {
				// Calculate how many degrees to add this frame.
				// (rpm * 360° / 60 seconds) gives degrees per second.
				const deltaAngle = (dt / 1000) * (rpmRef.current * (360 / 60));
				lastAngleRef.current = (lastAngleRef.current + deltaAngle) % 360;

				// Compute a subtle offset (for visual flair)
				const offsetRadius = 5; // pixels
				const offsetX =
					Math.cos(lastAngleRef.current * (Math.PI / 180)) * offsetRadius;
				const offsetY =
					Math.sin(lastAngleRef.current * (Math.PI / 180)) * offsetRadius;

				setSweepState({ x: offsetX, y: offsetY, angle: lastAngleRef.current });
			}

			rafId = requestAnimationFrame(loop);
		};

		loop();
		return () => cancelAnimationFrame(rafId);
	}, []);

	return (
		<div className="p-6" style={{ marginTop: 0 }}>
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
							ref={positionTriggerRef}
							className="flex justify-between p-4 hover:bg-gray-50"
						>
							<div className="flex items-center">
								<Move size={24} className="mr-2 text-green-500" />
								<span>Position</span>
							</div>
							<span className="text-right font-bold">
								{Math.round(sweepState.angle)}° -{" "}
								{isRunning ? "Running" : "Stopped"}
							</span>
						</AccordionTrigger>
						<AccordionContent className="p-4">
							<ResponsiveContainer width="100%" height={300}>
								<div className="flex flex-col items-center justify-center">
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
