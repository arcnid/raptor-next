import type React from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
	ChevronRight,
	ChevronLeft,
	AlertTriangle,
	PenToolIcon as Tool,
	FileText,
	Activity,
	HeadphonesIcon,
} from "lucide-react";

const JogControl = ({ title }: { title: string }) => (
	<div className="bg-white p-6 rounded-lg shadow-md mb-6">
		<h2 className="text-2xl font-bold mb-4">{title}</h2>
		<div className="flex justify-between">
			<Button size="lg" className="w-24 h-24 text-lg font-bold">
				<ChevronLeft size={32} />
				REV
			</Button>
			<Button size="lg" className="w-24 h-24 text-lg font-bold">
				FWD
				<ChevronRight size={32} />
			</Button>
		</div>
	</div>
);

const MaintenanceButton = ({
	title,
	icon: Icon,
}: {
	title: string;
	icon: React.ElementType;
}) => (
	<Button
		variant="outline"
		className="flex flex-col h-24 w-full text-lg font-semibold items-center justify-center gap-2 border-2 border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
	>
		<Icon size={24} className="mr-4" />
		{title}
	</Button>
);

export function MaintenancePanel() {
	return (
		<div className="p-6 bg-gray-100 w-full">
			<div className="flex flex-col lg:flex-row gap-6">
				<div className="w-full lg:w-1/3">
					<JogControl title="Tractor Jog" />
					<JogControl title="Chain Jog" />
				</div>

				<div className="w-full lg:w-1/3">
					<div className="bg-white p-6 rounded-lg shadow-md">
						<h2 className="text-2xl font-bold mb-4">Isolate Tractor</h2>
						<div className="space-y-4">
							{[1, 2, 3].map((num) => (
								<div key={num} className="flex items-center justify-between">
									<span className="text-lg font-semibold">Switch {num}</span>
									<Switch />
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="w-full lg:w-1/3">
					<MaintenanceButton title="Clear Fault" icon={AlertTriangle} />
					<MaintenanceButton title="Preventative Maintenance" icon={Tool} />
					<MaintenanceButton title="Logs" icon={FileText} />
					<MaintenanceButton title="Sensor Read" icon={Activity} />
					<MaintenanceButton title="Remote Support" icon={HeadphonesIcon} />
				</div>
			</div>
		</div>
	);
}
