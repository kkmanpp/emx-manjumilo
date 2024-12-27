import Link from "next/link";

export default function NavBar({ tabs, locale }) {
  return (
    <ul className="list-none bg-Grey-900 overflow-hidden px-4 rounded-2xl">
      {tabs.map((tab, index) => {
        return (
          <li
            key={index}
            className="inline-block text-center text-white p-3 cursor-pointer hover:bg-Grey-700 active:bg-Grey-900"
          >
            <Link href={`/${locale}${tab.path}`}>{tab.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
