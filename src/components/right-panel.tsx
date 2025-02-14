"use client";

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

const data = [
	{ name: "Jan", value: 400 },
	{ name: "Feb", value: 300 },
	{ name: "Mar", value: 200 },
	{ name: "Apr", value: 278 },
	{ name: "May", value: 189 },
];

export default function RightPanel() {
	return (
		<div
			className="p-6"
			style={{
				backgroundColor: "#EBD12B",
				borderRadius: 10,
				marginTop: 25,
				marginRight: 25,
			}}
		>
			<Accordion type="single" collapsible className="w-full">
				<AccordionItem value="item-1">
					<AccordionTrigger className="flex justify-between">
						<span>Throughput</span>
						<span className="text-right">0.00 bu/hr</span>
					</AccordionTrigger>
					<AccordionContent>
						<ResponsiveContainer width="100%" height={200}>
							<LineChart data={data}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Line type="monotone" dataKey="value" stroke="#8884d8" />
							</LineChart>
						</ResponsiveContainer>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-2">
					<AccordionTrigger className="flex justify-between">
						<span>Position</span>
						<span className="text-right">0% - parked</span>
					</AccordionTrigger>
					<AccordionContent>
						<ResponsiveContainer width="100%" height={200}>
							<LineChart data={data}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Line type="monotone" dataKey="value" stroke="#82ca9d" />
							</LineChart>
						</ResponsiveContainer>
					</AccordionContent>
				</AccordionItem>
				<AccordionItem value="item-3">
					<AccordionTrigger className="flex justify-between">
						<span>Chain RPM</span>
						<span className="text-right">0 rpm</span>
					</AccordionTrigger>
					<AccordionContent>
						<ResponsiveContainer width="100%" height={200}>
							<LineChart data={data}>
								<CartesianGrid strokeDasharray="3 3" />
								<XAxis dataKey="name" />
								<YAxis />
								<Tooltip />
								<Line type="monotone" dataKey="value" stroke="#ffc658" />
							</LineChart>
						</ResponsiveContainer>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}
