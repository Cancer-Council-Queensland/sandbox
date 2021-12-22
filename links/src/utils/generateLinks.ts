import { getLinks } from "./getLinks";
import { getSiblings } from "./getSibling";
import { getParents } from "./getParent";

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
	let tree = toTree(arr);
	getSiblings(arr, "cancerqld/research");
	getParents(arr, "cancerqld");
	//fs.writeFileSync("./output.json", JSON.stringify(sibling, null, 2));
	return tree;
};

export type Node = {
	id: number;
	parent_id: number;
	slug: string;
};

export type NodeWithChildren = Node & { children?: NodeWithChildren[] };

export type Tree = NodeWithChildren[];

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
