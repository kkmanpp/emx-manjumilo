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

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export async function generateStaticParams() {
  return [{ lang: "cht" }, { lang: "chs" }];
}

export default async function RootLayout({ children, params }) {
  // console.log("public url", process.env);
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
        <div className="grid grid-rows-[auto_auto_auto_1fr_auto] items-center justify-items-center min-h-screen bg-Yellow-50">
          <div className="w-full">
            <Image src={company} alt="company-img" height={500} />
          </div>

          <div className="mobile:hidden laptop:block desktop:block w-full grid grid-cols-2 gap-x-4 w-full absolute top-0 right-0">
            <div className="col-start-2 flex flex-row justify-end gap-x-8 px-6 mt-2 text-Grey-700 text-p5 font-medium">
              <div className="cursor-pointer hover:text-Green-700">
                {languages.cht}
              </div>
              <div className="cursor-pointer hover:text-Green-700">
                {languages.chs}
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col justify-center items-center relative bottom-4">
              <div className="mobile:hidden laptop:block desktop:block w-full">
                <NavBar tabs={tabs} />
              </div>
            </div>

            <div className="mobile:block laptop:hidden desktop:hidden w-full">
              <div className="fixed top-0 left-0 z-50 max-w-screen w-full">
                <HamburgerMenu tabs={tabs} languages={languages} />
              </div>
            </div>
          </div>

          <main>{children}</main>
          <footer className="border-t-Green-500 border-2 bg-white w-full flex flex-col justify-center items-center mt-4">
            <div className="my-4">
              <Image
                src={bottomLogo}
                alt="manjumilo"
                height={800}
                width={300}
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
      </body>
    </html>
  );
}
