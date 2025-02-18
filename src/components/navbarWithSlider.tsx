// components/NavbarWithSidebar.jsx
"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

interface NavbarProps {
	activeRoute: string;
}

export default function Navbar({ activeRoute }: NavbarProps) {
	// Define all possible pages
	const pages = [
		{ href: "/", label: "Home" },
		{ href: "/program", label: "Program" },
		{ href: "/settings", label: "Settings" },
		{ href: "/maintenance", label: "Maintenance" },
	];

	// Find the active page (fallback to Home if not found)
	const activePage =
		pages.find((page) => page.href === activeRoute) || pages[0];

	// Filter out the active page from the sidebar list
	const sidebarLinks = pages.filter((page) => page.href !== activeRoute);

	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => setMenuOpen(!menuOpen);

	// Handler for clicks inside the sidebar container:
	// If the click didn't occur on a link (or a descendant of a link), close the menu.
	const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!(e.target as HTMLElement).closest("a")) {
			setMenuOpen(false);
		}
	};

	return (
		<>
			{/* Navbar */}
			<nav
				className="bg-black text-white p-6 flex justify-between items-center relative"
				style={{ zIndex: 1000 }} // High z-index so it stays on top of the overlay
			>
				<div className="flex items-center space-x-4">
					<button onClick={toggleMenu} className="bg-yellow-100 p-3 rounded-md">
						<Menu
							size={28}
							className={`text-black transition-transform duration-300 ${
								menuOpen ? "rotate-90" : ""
							}`}
						/>
					</button>
					{/* Active Page Indicator */}
					<span className="text-xl font-semibold" style={{ fontSize: "2em" }}>
						{activePage.label}
					</span>
				</div>
				<span className="text-xl font-semibold" style={{ fontSize: "2em" }}>
					Sioux Steel
				</span>
			</nav>

			{/* Sidebar Overlay */}
			<div
				className={`fixed top-0 left-0 h-full w-full z-50 transition-transform duration-300 ${
					menuOpen ? "translate-x-0" : "-translate-x-full"
				}`}
				onClick={() => setMenuOpen(false)}
			>
				{/* Gradient Background */}
				<div className="h-full w-full bg-gradient-to-r from-black to-transparent flex">
					{/* White Vertical Menu */}
					<div className="w-64 h-full p-6" onClick={handleContainerClick}>
						<div className="flex justify-end mb-6">
							<button
								onClick={() => setMenuOpen(false)}
								className="text-black"
								style={{ zIndex: 3000 }}
							>
								<X size={28} />
							</button>
						</div>
						<div
							style={{ color: "white", marginLeft: "65px", marginTop: "-50px" }}
						>
							<ul className="space-y-4">
								{sidebarLinks.map((page) => (
									<li key={page.href}>
										<Link
											href={page.href}
											onClick={() => setMenuOpen(false)}
											style={{
												color: "white",
												fontSize: "2rem",
												fontWeight: "bold",
											}}
										>
											{page.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
