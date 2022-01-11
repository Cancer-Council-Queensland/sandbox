import { getLinks } from "./getLinks";
import { toTree } from "./toTree";
import { Tree } from "./types";

type GenerateLinks = {
	(): Promise<Tree>;
};

/**
 * Generates a tree of links
 * @returns link tree
 */
export const generateLinks: GenerateLinks = async () => {
	const links = await getLinks();
	const arr = Object.values(links);
	let tree = toTree(arr);
	return tree;
};
