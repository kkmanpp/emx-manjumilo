"use client";

import { useState } from "react";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";

export default function HamburgerMenu({
	tabs,
	languageTab,
	languages,
	locale,
}) {
	const [menuOpen, setMenuOpen] = useState(false);
	const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

	return (
		<div className="relative">
			<button
				className="absolute top-4 right-4 hover:text-Grey-400 z-50 flex items-center text-Grey-700 px-4 py-2 hover:shadow-lg"
				onClick={() => setMenuOpen(!menuOpen)}
			>
				<svg
					className="w-8 h-8"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						d="M4 6h16M4 12h16M4 18h16"
					></path>
				</svg>
			</button>

			{/* Sliding Menu */}
			<div
				className={`fixed top-0 left-0 h-full w-full bg-Green-700 z-40 transition-transform transform ${
					menuOpen ? "translate-x-1/2" : "translate-x-full"
				}`}
			>
				{/* Menu Options */}
				<div className="absolute top-[4rem] right-0 w-full mobile:overflow-auto">
					<ul className="list-none">
						{tabs.map((tab, index) => (
							<li key={index} className="border-b border-Grey-800">
								<Link
									href={`/${locale}${tab.path}`}
									className="block text-white px-4 py-3 hover:text-Grey-300"
									onClick={() => setMenuOpen(false)}
								>
									{tab.label}
								</Link>
							</li>
						))}

						{/* Language Option */}
						<li className="border-b border-Grey-800 relative">
							<button
								className="block text-white px-4 py-3 hover:text-Grey-300 w-full text-left"
								onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
							>
								{languageTab}
							</button>

							{/* Sublist */}
							{languageMenuOpen && (
								<ul className="absolute top-full left-0 bg-Grey-700 w-full">
									{Object.keys(languages).map((key, index) => {
										return (
											<li key={index} className="border-b border-Grey-600">
												<LocaleSwitcher
													locale={languages[key]}
													code={key}
													style="block text-white px-4 py-3 hover:text-Grey-300 w-full text-left"
													additionalAction={() => {
														setMenuOpen(false);
														setLanguageMenuOpen(false);
													}}
												/>
											</li>
										);
									})}
								</ul>
							)}
						</li>
					</ul>
				</div>
			</div>
			{/* Background Overlay (optional) */}
			{menuOpen && (
				<div
					className="fixed inset-0 bg-black bg-opacity-50 z-30"
					onClick={() => setMenuOpen(false)} // Close overlay when clicked
				></div>
			)}
		</div>
	);
}
