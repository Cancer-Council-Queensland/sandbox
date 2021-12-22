import { test } from "uvu";
import * as assert from "uvu/assert";
import { getSiblings } from "../getsiblings";
import { Tree, Node } from "../generateLinks";

export let initial: Node[] = [
	{
		id: 90833231,
		parent_id: 75884024,
		slug: "cancerqld/research",
	},
	{ id: 76559303, parent_id: 75884024, slug: "cancerqld/" },
	{ id: 75884024, parent_id: 0, slug: "cancerqld" },
	{ id: 75884025, parent_id: 0, slug: "onoty" },
	{
		id: 90833232,
		parent_id: 90833231,
		slug: "cancerqld/research/viertel-cancer-research-centre",
	},
];
test("getSiblings: Get siblings with child", () => {
	const expected: Tree = [
		{
			id: 90833231,
			parent_id: 75884024,
			slug: "cancerqld/research",
			children: [
				{
					id: 90833232,
					parent_id: 90833231,
					slug: "cancerqld/research/viertel-cancer-research-centre",
					children: undefined,
				},
			],
		},
		{
			id: 76559303,
			parent_id: 75884024,
			slug: "cancerqld/",
			children: undefined,
		},
	];
	let tree = getSiblings(initial, "cancerqld/research");

	assert.equal(tree, expected);
});

test("getSiblings: Get a node with no sibling", () => {
	const expected: Tree = [
		{
			id: 90833232,
			parent_id: 90833231,
			slug: "cancerqld/research/viertel-cancer-research-centre",
			children: undefined,
		},
	];
	let tree = getSiblings(
		initial,
		"cancerqld/research/viertel-cancer-research-centre"
	);

	assert.equal(tree, expected);
});

test.run();
