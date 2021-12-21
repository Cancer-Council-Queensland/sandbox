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
	getSiblings(arr, "cancerqld/research");
	getParents(arr, "cancerqld/research/viertel-cancer-research-centre");
	return;
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

export type GetSiblings = {
	(arr: Node[], slug: string): Tree;
};

// getSiblings(tree, '/cancerqld/research')
export const getSiblings: GetSiblings = (arr, slug) => {
	let tree: Tree = [];
	let parent: number;
	for (const node of arr) {
		if (node.slug === slug) {
			parent = node.parent_id;
			tree = toTree(arr, parent);
		}
	}
	return tree;
};
export const toTree: ToTree = (arr, parent_id = 0) => {
	let tree: Tree = [];
	for (const node of arr) {
		// use key value to get parent
		if (node.parent_id === parent_id) {
			let child_tree = toTree(arr, node.id);
			let children = child_tree.length ? child_tree : undefined;
			tree.push({ ...node, children });
		}
	}
	return tree;
};

// getParents(tree, '/cancerqld/research') get parent_id of slug
export const getParents: GetSiblings = (arr, slug) => {
	let tree: Tree = [];
	for (const node of arr) {
		if (node.slug === slug) {
			tree = closestParent(arr, node.parent_id);
			tree.push(node);
		}
	}
	return tree;
};

//closesrparent - get the second closest parent_id
export const closestParent: ToTree = (arr, parent) => {
	let tree: Tree = [];
	for (const node of arr) {
		if (node.id === parent) {
			if (node.parent_id !== 0) {
				//recursion -  to get the gradparents
				tree = closestParent(arr, node.parent_id);
			}
			tree.push(node);
		}
	}
	return tree;
};
