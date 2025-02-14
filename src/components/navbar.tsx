import { Menu } from "lucide-react";

export default function Navbar() {
	return (
		<nav className="bg-black text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<div className="flex items-center space-x-4 -ml-16">
					<button className="bg-yellow-100 p-2 rounded-md">
						<Menu className="text-black" />
					</button>
					<span className="text-lg font-semibold">Home</span>
				</div>
				<div className="text-lg font-semibold -mr-16">Sioux Steel</div>
			</div>
		</nav>
	);
}
