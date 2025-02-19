"use client";
export function SweepPosition({ sweepState }) {
	const { angle } = sweepState;

	return (
		<div className="flex items-center justify-center">
			<svg width="300" height="300" viewBox="0 0 100 100">
				{/* Compass labels */}
				<text
					x="50"
					y="5"
					textAnchor="middle"
					dominantBaseline="middle"
					fontSize="5"
					fill="black"
				>
					N
				</text>
				<text
					x="95"
					y="50"
					textAnchor="middle"
					dominantBaseline="middle"
					fontSize="5"
					fill="black"
				>
					E
				</text>
				<text
					x="50"
					y="95"
					textAnchor="middle"
					dominantBaseline="middle"
					fontSize="5"
					fill="black"
				>
					S
				</text>
				<text
					x="5"
					y="50"
					textAnchor="middle"
					dominantBaseline="middle"
					fontSize="5"
					fill="black"
				>
					W
				</text>

				{/* Main circle */}
				<circle
					cx="50"
					cy="50"
					r="40"
					stroke="black"
					strokeWidth="1"
					fill="grey"
				/>

				{/* Radar sweep line, rotated based on the current angle */}
				<line
					x1="50"
					y1="50"
					x2="90"
					y2="50"
					stroke="blue"
					strokeWidth="1"
					transform={`rotate(${angle}, 50, 50)`}
				/>

				{/* Small center circle to denote the pivot (drawn after the line so it appears on top) */}
				<circle cx="50" cy="50" r="2" fill="black" />

				{/* Display current angle in small, subtle text in the bottom right */}
				<text
					x="98"
					y="98"
					textAnchor="end"
					dominantBaseline="auto"
					fontSize="3"
					fill="black"
					opacity="0.5"
				>
					{Math.round(angle)}°
				</text>
			</svg>
		</div>
	);
}
