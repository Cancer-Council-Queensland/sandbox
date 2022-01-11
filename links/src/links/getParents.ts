import { Node } from "./types";

export type GetParents = {
	(nodes: Node[], slug: string): Node[];
};

/**
 * get parents of the given slug
 * @param nodes - the array of nodes
 * @param slug - the lookup slug
 * @returns
 */
export const getParents: GetParents = (nodes, slug) => {
	let parents: Node[] = [];
	for (const node of nodes) {
		if (node.slug !== slug) continue;
		parents = getRoot(nodes, node.parent_id);
		parents.push(node);
	}
	return parents;
};

export type GetRoot = {
	(nodes: Node[], parent_id: number): Node[];
};

/**
 * get the second closest parent_id
 * @param nodes - the array of nodes
 * @param parent_id - the id of the parent
 * @returns
 */
export const getRoot: GetRoot = (nodes, parent_id) => {
	let parents: Node[] = [];
	for (const node of nodes) {
		if (node.id !== parent_id) continue;
		if (node.parent_id !== 0) {
			parents = getRoot(nodes, node.parent_id);
		}
		parents.push(node);
	}
	return parents;
};
