export default function LeftPanel() {
	return (
		<div className="p-6 space-y-6">
			{/* Image section */}
			<div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
				<img
					src="/soy.png"
					alt="Grain Texture"
					className="absolute inset-0 w-full h-full object-cover"
				/>
				<div className="absolute inset-0 flex items-center justify-center">
					<h2 className="text-2xl font-bold text-white bg-black bg-opacity-50 p-2 rounded">
						BIN #8 - SOYBEANS
					</h2>
				</div>
			</div>

			{/* Temperature & Humidity section */}
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

			{/* Slider section */}
			<div className="space-y-4">
				{/* Labels for slider range */}
				<div className="grid grid-cols-3 text-sm font-medium">
					<span className="text-left">4,500</span>
					<span className="text-center">7,500</span>
					<span className="text-right">10,000</span>
				</div>
				{/* Native range input */}
				<input
					type="range"
					min="4500"
					max="10000"
					step="50"
					defaultValue="5250"
					className="w-full accent-blue-500"
				/>
				<h3 className="text-lg font-semibold text-center">
					Target Throughput: 5,250 bu/hr
				</h3>
			</div>

			{/* Buttons section */}
			<div className="flex justify-center space-x-4">
				{/* Reset Button */}
				<button
					type="button"
					className="flex items-center space-x-2 rounded-full bg-blue-500 hover:bg-blue-600 px-12 py-6"
				>
					{/* RefreshCcw Icon */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<polyline points="1 4 1 10 7 10"></polyline>
						<polyline points="23 20 23 14 17 14"></polyline>
						<path d="M20.49 9A9 9 0 0 0 5 5.07L1 10"></path>
						<path d="M3.51 15A9 9 0 0 0 19 18.93l4-4.07"></path>
					</svg>
					<span>Reset</span>
				</button>

				{/* Start Button */}
				<button
					type="button"
					className="flex items-center space-x-2 rounded-full bg-green-500 hover:bg-green-600 px-12 py-6"
				>
					{/* Play Icon */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<polygon points="5 3 19 12 5 21 5 3"></polygon>
					</svg>
					<span>Start</span>
				</button>

				{/* Stop Button */}
				<button
					type="button"
					className="flex items-center space-x-2 rounded-full bg-red-500 hover:bg-red-600 px-12 py-6"
				>
					{/* StopCircle Icon */}
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="w-5 h-5"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<circle cx="12" cy="12" r="10"></circle>
						<rect x="9" y="9" width="6" height="6"></rect>
					</svg>
					<span>Stop</span>
				</button>
			</div>
		</div>
	);
}
