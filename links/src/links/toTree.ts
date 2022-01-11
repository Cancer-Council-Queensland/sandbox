import { Node, Tree } from "./types";

export type ToTree = {
	(arr: Node[], parent_id?: number): Tree;
};

export const toTree: ToTree = (arr, parent_id = 0) => {
	let tree: Tree = [];
	for (const node of arr) {
		if (node.parent_id !== parent_id) continue;
		let child_tree = toTree(arr, node.id);
		let children = child_tree.length ? child_tree : undefined;
		tree.push({ ...node, children });
	}
	return tree;
};
