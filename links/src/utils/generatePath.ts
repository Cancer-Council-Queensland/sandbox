import type { ParsedUrlQuery } from "querystring"

type GeneratePath = {
	(params: ParsedUrlQuery, site?: string): {
		slug: string;
		site?: string;
	}
}

/**
 * Generates the path based on params of GetStaticPropsContext
 * @param slug
 * @returns
 */
export const generatePath: GeneratePath = (params, site) => {
	// TODO: logic
	const slug = params.slug?.toString() ?? '';
	return { slug, site }
}
