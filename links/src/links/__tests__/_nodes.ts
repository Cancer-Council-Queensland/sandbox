import { Node } from "../types";

const nodes: Node[] = [
	{ id: 1, parent_id: 0, slug: "cancerqld" },
	{
		id: 2,
		parent_id: 1,
		slug: "cancerqld/",
	},
	{
		id: 3,
		parent_id: 1,
		slug: "cancerqld/research",
	},
	{
		id: 4,
		parent_id: 3,
		slug: "cancerqld/research/viertel-cancer-research-centre",
	},
	{
		id: 5,
		parent_id: 1,
		slug: "cancerqld/support",
	},
	{
		id: 6,
		parent_id: 5,
		slug: "cancerqld/support/contact",
	},
];

export default nodes;
