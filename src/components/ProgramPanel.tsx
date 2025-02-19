import { Button } from "@/components/ui/button";
import { Plus, Upload } from "lucide-react";

const SettingButton = ({ title, icon: Icon }) => (
	<Button
		variant="outline"
		className="flex flex-col h-24 w-full text-lg font-semibold items-center justify-center gap-2 border-2 border-gray-300 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105"
	>
		<Icon size={48} className="text-gray-700" />
		<span className="text-center text-gray-800">{title}</span>
	</Button>
);

export function ProgramPanel() {
	return (
		<div className="flex items-center justify-center p-6 w-full h-full">
			<div className="flex flex-row space-x-8 w-full">
				<div className="flex-1">
					<SettingButton title="Create New Program" icon={Plus} />
				</div>
				<div className="flex-1">
					<SettingButton title="Load Program" icon={Upload} />
				</div>
			</div>
		</div>
	);
}
