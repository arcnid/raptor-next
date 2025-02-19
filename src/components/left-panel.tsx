"use client";

import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
	Thermometer,
	Droplets,
	Bean,
	RotateCcw,
	Play,
	Square,
} from "lucide-react";
import { useState } from "react";

const SensorCard = ({ title, icon: Icon, value, unit, iconColor }) => (
	<div className="border p-4 rounded-lg shadow-md">
		<div className="flex items-center justify-between">
			<div className="flex items-center">
				<Icon size={24} className={`mr-2 ${iconColor}`} />
				<h3 className="text-lg font-semibold">{title}</h3>
			</div>
			<p className="text-2xl font-bold text-right">
				{value}
				{unit}
			</p>
		</div>
	</div>
);

export default function LeftPanel() {
	const [throughput, setThroughput] = useState(6000);

	return (
		<div className="p-6 space-y-5">
			{/* Header */}
			<div className="border p-6 rounded-lg card-shadow shadow-md flex items-center justify-center">
				<h2 className="text-3xl font-bold text-primary flex items-center">
					<Bean size={48} className="mr-4" />
					SOYBEANS - BIN #8
				</h2>
			</div>

			{/* Sensor Readings */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<SensorCard
					title="Temperature"
					icon={Thermometer}
					value="74"
					unit="°F"
					iconColor="text-red-500"
				/>
				<SensorCard
					title="Relative Humidity"
					icon={Droplets}
					value="45"
					unit="%"
					iconColor="text-blue-500"
				/>
			</div>

			{/* Target Throughput */}
			<div className="border p-6 rounded-lg shadow-md">
				<h3 className="text-lg font-semibold mb-4">Target Throughput</h3>
				<Slider
					value={[throughput]}
					onValueChange={(value) => setThroughput(value[0])}
					max={10000}
					min={4000}
					step={100}
					className="mb-4 bg-gray-100"
					style={{ height: 8, backgroundColor: "#E5E7EB", color: "#3B82F6" }}
				/>
				<div className="flex justify-between text-sm text-gray-600">
					<span>4000</span>
					<span>10000</span>
				</div>
				<p className="text-center text-2xl font-bold mt-4">
					Throughput: {throughput} bu/hr
				</p>
			</div>

			{/* Controls */}
			<div className="grid grid-cols-3 gap-4">
				<Button
					size="lg"
					variant="outline"
					className="bg-gray-100 h-32 text-lg font-bold flex flex-col items-center justify-center space-y-2 border-2"
				>
					<RotateCcw size={32} />
					<span>Reset</span>
				</Button>
				<Button
					size="lg"
					className="h-32 text-lg font-bold flex flex-col items-center justify-center space-y-2 bg-green-500 hover:bg-green-600 text-white"
				>
					<Play size={32} />
					<span>Start</span>
				</Button>
				<Button
					size="lg"
					className="h-32 text-lg font-bold flex flex-col items-center justify-center space-y-2 bg-red-500 hover:bg-red-600 text-white"
				>
					<Square size={32} />
					<span>Stop</span>
				</Button>
			</div>
		</div>
	);
}
