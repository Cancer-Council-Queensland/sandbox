import { ToTree, Tree, GetSiblings } from "./generateLinks";

// getParents(tree, '/cancerqld/research') get parent_id of slug
export const getParents: GetSiblings = (arr, slug) => {
	let tree: Tree = [];
	for (const node of arr) {
		if (node.slug !== slug) continue;
		tree = closestParent(arr, node.parent_id);
		tree.push(node);
	}
	return tree;
};

//closesrparent - get the second closest parent_id
export const closestParent: ToTree = (arr, parent) => {
	let tree: Tree = [];
	for (const node of arr) {
		if (node.id !== parent) continue;
		if (node.parent_id !== 0) {
			//recursion -  to get the node of gradparents
			tree = closestParent(arr, node.parent_id);
		}
		tree.push(node);
	}
	return tree;
};
