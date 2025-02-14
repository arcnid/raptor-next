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
						BIN #8 - Soybeans
					</h2>
				</div>
			</div>

			<div className="space-y-4">
				<div className="flex justify-center items-center gap-60">
					<div className="flex items-center gap-2">
						<h2 className="text-xl font-semibold">Temperature</h2>
						<span>75°F</span>
					</div>
					<div className="flex items-center gap-2">
						<h2 className="text-xl font-semibold">Humidity</h2>
						<span>40%</span>
					</div>
				</div>
			</div>

			<div className="space-y-4">
				<h3 className="text-lg font-semibold">Target Throughput</h3>
				<Slider defaultValue={[50]} max={100} step={1} />
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
