import "server-only";

const dictionaries = {
	//繁體
	cht: () =>
		import("./../../../public/dictionaries/cht.json").then(
			(module) => module.default
		),
	//簡體
	chs: () =>
		import("./../../../public/dictionaries/chs.json").then(
			(module) => module.default
		),
};

export const getDictionary = async (locale) => dictionaries[locale]();
