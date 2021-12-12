import { getLinks } from "./getLinks";

type GenerateLinks = {
	(): Promise<any[]>;
};

/**
 *
 * @returns
 */
export const generateLinks: GenerateLinks = async () => {
	const links = await getLinks();

	// TODO: logic

	return [];
};
