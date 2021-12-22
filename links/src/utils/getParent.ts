import { ToTree, Tree, Node } from "./generateLinks";

export type GetParents = {
	(arr: Node[], slug: string): Tree;
};

/**
 * @getParents -  (tree, '/cancerqld/research')
 * get parent_id of the given slug
 */

export const getParents: GetParents = (arr, slug) => {
	let tree: Tree = [];
	for (const node of arr) {
		if (node.slug !== slug) continue;
		tree = getRoot(arr, node.parent_id);
		tree.push(node);
	}
	return tree;
};

/**
 * @closesrparent - (tree, id ) get the second closest parent_id
 */
export const getRoot: ToTree = (arr, parent) => {
	let tree: Tree = [];
	for (const node of arr) {
		if (node.id !== parent) continue;
		if (node.parent_id !== 0) {
			//recursion -  to get the node of gradparents
			tree = getRoot(arr, node.parent_id);
		}
		tree.push(node);
	}
	return tree;
};
