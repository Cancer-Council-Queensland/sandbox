import { storyblok } from "../lib/storyblok";

type Link = {
	id: number;
	slug: string;
	name: string;
	is_folder: boolean;
	parent_id: number;
	published: boolean;
	path: string | null;
	position: number;
	uuid: string;
	is_startpage: boolean;
	real_path: string;
};

type Links =
	| {
			[uuid: string]: Link;
	  }
	| ArrayLike<Link>;

type GetLinks = {
	(site?: string): Promise<Links>;
};

/**
 * Attempts to get all links from storyblok given a prefix filter
 * @returns
 */
export const getLinks: GetLinks = async () => {
	try {
		const slug = `cdn/links`;
		const { data } = await storyblok.get(slug, {
			token: "api token",
		});

		return data.links;
	} catch (error: any) {
		console.log(`Cannot get:`, error.message);
	}
};
