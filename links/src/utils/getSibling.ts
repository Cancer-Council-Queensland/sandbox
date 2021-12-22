import { toTree, Tree, GetSiblings } from "./generateLinks";

// getSiblings(tree, '/cancerqld/research')
export const getSiblings: GetSiblings = (arr, slug) => {
	let tree: Tree = [];
	for (const node of arr) {
		if (node.slug !== slug) continue;
		tree = toTree(arr, node.parent_id);
	}
	return tree;
};
