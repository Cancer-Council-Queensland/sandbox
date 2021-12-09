import { storyblok } from "../lib/storyblok";

type GetPage = {
	(slug: string): Promise<any>;
}

/**
 * Attempts to get a page from storyblok given a slug
 * @param slug
 * @returns
 */
export const getPage: GetPage = async (slug) => {
	try {
		const { data } = await storyblok.get(`cdn/stories/${slug}`);
		return data;
	} catch (error: any) {
		console.log(`Cannot find ${slug}:`, error.message);
	}
};
