import Image from "next/image";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Play, StopCircle } from "lucide-react";

export default function LeftPanel() {
	return (
		<div className="p-6 space-y-6">
			<div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
				<Image
					src="/soy.png"
					alt="Grain Texture"
					layout="fill"
					objectFit="cover"
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<h2 className="text-2xl font-bold text-white bg-black bg-opacity-50 p-2 rounded">
						BIN #8 - SOYBEANS
					</h2>
				</div>
			</div>

			<div className="space-y-4">
				<div className="flex justify-center items-center gap-40">
					<div className="flex items-center gap-1">
						<h2 className="text-xl">Temperature</h2>
						<span className="font-semibold">75°F</span>
					</div>
					<div className="flex items-center gap-1">
						<h2 className="text-xl">Relative Humidity</h2>
						<span className="font-semibold">40%</span>
					</div>
				</div>
			</div>

			<div className="space-y-4">
				{/* Labels for slider range */}
				<div className="grid grid-cols-3 text-sm font-medium">
					<span className="text-left">4,500</span>
					<span className="text-center">7,500</span>
					<span className="text-right">10,000</span>
				</div>
				{/* Updated slider with new range and color */}
				<Slider
					min={4500}
					max={10000}
					defaultValue={[5250]}
					step={50}
					className="accent-blue-500" // This applies a blue accent to the slider thumb/track
				/>
				<h3 className="text-lg font-semibold text-center">
					Target Throughput: 5,250 bu/hr
				</h3>
			</div>

			<div className="flex justify-center space-x-4">
				<Button
					size="lg"
					className="flex items-center space-x-2 rounded-full bg-blue-500 hover:bg-blue-600 px-12 py-6"
				>
					<RefreshCcw className="w-5 h-5" />
					<span>Reset</span>
				</Button>
				<Button
					size="lg"
					className="flex items-center space-x-2 rounded-full bg-green-500 hover:bg-green-600 px-12 py-6"
				>
					<Play className="w-5 h-5" />
					<span>Start</span>
				</Button>
				<Button
					size="lg"
					className="flex items-center space-x-2 rounded-full bg-red-500 hover:bg-red-600 px-12 py-6"
				>
					<StopCircle className="w-5 h-5" />
					<span>Stop</span>
				</Button>
			</div>
		</div>
	);
}
