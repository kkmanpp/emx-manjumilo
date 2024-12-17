import Link from "next/link";

export default function NavBar() {
	const TAB_LIST = [
		{ label: "首頁", path: "/" },
		{ label: "公司簡介", path: "/profile" },
		{ label: "所有產品", path: "/new-products" },
		{ label: "醫療知識", path: "/knowledge" },
		{ label: "飲用者心聲", path: "/user-feedback" },
		{ label: "保障知多少", path: "/safeguard" },
		{ label: "聯絡方法", path: "/contact" },
	];
	return (
		<>
			<ul className="list-none bg-Grey-900 overflow-hidden px-4 rounded-2xl">
				{TAB_LIST.map((tab, index) => {
					return (
						<li
							key={index}
							className="inline-block text-center text-white p-3 cursor-pointer hover:bg-Gray-700 active:bg-Gray-900"
						>
							<Link href={tab.path}>{tab.label}</Link>
						</li>
					);
				})}
			</ul>
		</>
	);
}
