export default function KnowledgeCard({ title, children }) {
	return (
		<div className="h-auto w-full rounded-[.6rem] grid grid-rows-[1fr_auto] shadow-xl bg-white dark:text-Grey-900 mobile:rounded-none">
			<div className="border-l-4 border-Green-400 font-semibold px-2 m-4">
				{title}
			</div>
			<div className="mb-2 mx-2">{children}</div>
		</div>
	);
}
