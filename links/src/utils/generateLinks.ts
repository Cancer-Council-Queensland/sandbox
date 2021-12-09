import { getLinks } from "./getLinks";

type GenerateLinks = {
	(site?: string): Promise<any[]>;
}

/**
 *
 * @param site
 * @returns
 */
export const generateLinks: GenerateLinks = async (site) => {
	const links = await getLinks(site)

	// TODO: logic

	return []
}
