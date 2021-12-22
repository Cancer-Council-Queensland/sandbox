import { toTree, Tree, Node } from "./generateLinks";

export type GetSiblings = {
	(arr: Node[], slug: string): Tree;
};

/**
 * @getSiblings - (tree, '/cancerqld/research')
 * get sibligs of given slug
 */
export const getSiblings: GetSiblings = (arr, slug) => {
	let tree: Tree = [];
	for (const node of arr) {
		if (node.slug !== slug) continue;
		tree = toTree(arr, node.parent_id);
	}
	return tree;
};
