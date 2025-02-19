import { Button } from "@/components/ui/button";
import {
	Home,
	RefreshCw,
	Gauge,
	Wifi,
	Maximize2,
	Power,
	Link,
	Trash2,
	Minimize2,
	RotateCcw,
	Zap,
	XOctagon,
} from "lucide-react";

const SettingButton = ({ title, icon: Icon }) => (
	<Button
		variant="outline"
		className="flex flex-col h-24 w-full text-lg font-semibold items-center justify-center gap-2 border-2 border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
	>
		<Icon size={48} className="text-gray-700" />
		<span className="text-center text-gray-800">{title}</span>
	</Button>
);

export function SettingsPanel() {
	return (
		<div className="flex items-center justify-center p-6 w-full">
			<div className="w-full">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					<SettingButton title="Set Sweep Home Position" icon={Home} />
					<SettingButton title="Update HMI" icon={RefreshCw} />
					<SettingButton title="Calibrate Throughput" icon={Gauge} />
					<SettingButton title="Network Settings" icon={Wifi} />
					<SettingButton title="Set Maximum Parameters" icon={Maximize2} />
					<SettingButton title="Reboot HMI" icon={Power} />
					<SettingButton title="Calibrate Chain" icon={Link} />
					<SettingButton title="Clear Sweep Programs" icon={Trash2} />
					<SettingButton title="Set Minimum Parameters" icon={Minimize2} />
					<SettingButton title="Reset HMI" icon={RotateCcw} />
					<SettingButton title="Calibrate Drives" icon={Zap} />
					<SettingButton title="Clear All Settings and Data" icon={XOctagon} />
				</div>
			</div>
		</div>
	);
}
