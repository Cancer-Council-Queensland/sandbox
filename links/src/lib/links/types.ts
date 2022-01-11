export type Node = {
	id: number;
	parent_id: number;
	slug: string;
};

export type NodeWithChildren = Node & { children?: NodeWithChildren[] };

export type Tree = NodeWithChildren[];
