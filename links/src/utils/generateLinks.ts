import fs from "fs";
import { getLinks } from "./getLinks";

type GenerateLinks = {
	(): Promise<any>;
};

/**
 *
 * @returns
 */
export const generateLinks: GenerateLinks = async () => {
	const links = await getLinks();
	const arr = Object.values(links);
	let tree = totree(arr, 0);

	return tree;
};

export const totree = (arr: any[], parent_id: number = 0) => {
	let tree = [];
	for (const node of arr) {
		// use key value to get parent
		if (node.parent_id === parent_id) {
			let children = totree(arr, node.id);
			if (children.length) {
				node.children = children;
			}
			tree.push(node);
		}
	}
	return tree;
};
