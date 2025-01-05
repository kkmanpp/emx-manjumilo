"use client";

import { useState } from "react";
import Link from "next/link";
import LocaleSwitcher from "./LocaleSwitcher";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function HamburgerMenu({
  tabs,
  languageTab,
  languages,
  locale,
}) {
  const pathname = usePathname();
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
        className={`fixed top-0 left-0 h-full w-screen bg-Green-700 z-40 transition-transform transform ${
          menuOpen ? "translate-x-1/2" : "translate-x-full"
        }`}
      >
        {/* Menu Options */}
        <div className="absolute top-[4rem] right-0 w-full h-full mobile:overflow-auto">
          <ul className="list-none">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`${
                  pathname === `/${locale}${tab.path}` &&
                  "bg-Green-500 rounded-xl w-[50%]"
                }`}
              >
                <Link
                  href={`/${locale}${tab.path}`}
                  className="block text-white px-4 py-3 hover:text-Grey-300"
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                >
                  {tab.label}
                </Link>
              </li>
            ))}

            {/* Language Option */}
            <li className="relative">
              <button
                className={`"block text-white px-4 py-3 w-[50%] text-left ${
                  languageMenuOpen && "bg-Green-500"
                }`}
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
              >
                <div className="grid grid-cols-[auto_auto]">
                  <div> {languageTab}</div>
                  <div className="flex flex-col items-end justify-center">
                    <Image
                      src={`${
                        languageMenuOpen ? "/collapse" : "/expand"
                      }-arrow.png`}
                      alt="expand"
                      className="object-contain w-[1rem]"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
              </button>

              {/* Sublist */}
              {languageMenuOpen && (
                <ul className="absolute top-full left-0 w-full">
                  {Object.keys(languages).map((key, index) => {
                    return (
                      <li key={index}>
                        <LocaleSwitcher
                          locale={languages[key]}
                          code={key}
                          style={`block ${
                            key === locale ? "text-Yellow-400" : "text-White"
                          } px-4 py-3 hover:text-Grey-300 w-full text-left`}
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
