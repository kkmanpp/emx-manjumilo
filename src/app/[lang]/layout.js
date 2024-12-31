// "use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./../../app/globals.css";
import Image from "next/image";
import Link from "next/link";
import bottomLogo from "../../../public/buttom_logo.jpg";
import company from "./../../../public/company.jpg";
import NavBar from "@/components/Navbar";
import HamburgerMenu from "@/components/HamburgerMenu";
import facebook from "../../../public/facebook.svg";
import { getDictionary } from "./dictionaries";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import LoaderWrapper from "@/components/LoaderWrapper";
import { LoadingProvider } from "@/context/LoadingContext";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata = {
	title: {
		template: "%s | 譽俊貿易-米潞健康一族 EMX-Manjumilo",
		default: "譽俊貿易-米潞健康一族 EMX-Manjumilo",
	},
	description: "澳門譽俊貿易-米潞健康一族, 地址:, 電話:28971006, 63110338",
	keywords: [
		"譽俊貿易-米潞健康一族",
		"譽俊貿易",
		"米潞健康一族",
		"健康",
		"疾病",
		"emx",
		"manju",
		"milo",
	],
	openGraph: {
		images: [
			{ url: "/opengraph-image.jpg", atl: "萬壽之露", width: 800, height: 400 },
		],
		title: "萬壽之露",
		description: "來自長壽島沖繩的禮物， 帶給您新的生活習慣",
		// url: "http://localhost:3001/cht", website url
		type: "website",
		siteName: "譽俊貿易-米潞健康一族 EMX-Manjumilo",
	},
};
export async function generateStaticParams() {
	return [{ lang: "cht" }, { lang: "chs" }];
}

export default async function RootLayout({ children, params }) {
	const { lang } = await params;
	const t = await getDictionary(lang);
	const {
		homepage,
		profile,
		products,
		knowledge,
		feedback,
		safeguard,
		contact,
		language,
	} = t.tabs;

	const languages = t.languages;

	const tabs = [
		{ label: homepage, path: "/" },
		{ label: profile, path: "/profile" },
		{ label: products, path: "/products" },
		{ label: knowledge, path: "/knowledge" },
		{ label: feedback, path: "/feedback" },
		{ label: safeguard, path: "/safeguard" },
		{ label: contact, path: "/contact" },
	];

	return (
		<html lang={lang}>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<LoadingProvider>
					<div className="grid grid-rows-[auto_auto_1fr_auto] laptop:grid-rows-[auto_auto_auto_1fr_auto] items-center justify-items-center min-h-screen bg-Yellow-50">
						<div className="w-full">
							<Image
								src={company}
								alt="company-img"
								height={500}
								className="object-contain"
							/>
						</div>

						<div className="hidden laptop:block  grid grid-cols-2 gap-x-4 w-full absolute top-0 right-0">
							<div className="col-start-2 flex flex-row justify-end gap-x-8 px-6 mt-2 text-Grey-700 text-p5 font-medium">
								{Object.keys(languages).map((key, index) => {
									return (
										<div key={key}>
											<LocaleSwitcher locale={languages[key]} code={key} />
										</div>
									);
								})}
							</div>
						</div>

						<div>
							<div className="flex flex-col justify-center items-center relative bottom-4">
								<div className="hidden laptop:block w-full">
									<NavBar tabs={tabs} locale={lang} />
								</div>
							</div>

							<div className="block laptop:hidden w-full">
								<div className="fixed top-0 left-0 z-50 max-w-screen w-full">
									<HamburgerMenu
										tabs={tabs}
										languageTab={language}
										languages={languages}
										locale={lang}
									/>
								</div>
							</div>
						</div>

						<main className="p-6 w-screen flex flex-col">
							<LoaderWrapper>{children}</LoaderWrapper>
						</main>
						<footer className="border-t-Green-500 border-2 bg-white w-full flex flex-col justify-center items-center mt-4 ">
							<div className="my-4">
								<Image
									src="/buttom_logo.jpg"
									alt="manjumilo"
									height={800}
									width={300}
									className="object-cover w-[auto]"
								/>
							</div>

							<div className="text-Grey-500">
								Copyright © 2013 Milo company, All Rights Reserved ®
							</div>
							<div className="cursor-pointer py-2">
								<a
									href="https://www.facebook.com/milo.com.mo/about"
									target="_blank"
									rel="noreferrer"
								>
									<Image src={facebook} alt="facebook" height={40} width={40} />
								</a>
							</div>
						</footer>
					</div>
				</LoadingProvider>
			</body>
		</html>
	);
}
