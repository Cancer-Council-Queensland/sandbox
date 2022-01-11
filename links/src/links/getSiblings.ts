import { toTree } from "./toTree";
import { Node, Tree } from "./types";

export type GetSiblings = {
	(nodes: Node[], slug: string): Tree;
};

/**
 * get sibligs of given slug
 * @param nodes - array of nodes
 * @param slug - the current slug
 * @returns the array of siblings
 */
export const getSiblings: GetSiblings = (nodes, slug) => {
	let tree: Tree = [];
	for (const node of nodes) {
		if (node.slug !== slug) continue;
		tree = toTree(nodes, node.parent_id);
	}
	return tree;
};
