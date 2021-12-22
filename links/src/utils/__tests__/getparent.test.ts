import { test } from "uvu";
import * as assert from "uvu/assert";
import { getParents } from "../getparents";
import { Tree, Node } from "../generateLinks";
let initial: Node[] = [
	{ id: 75884024, parent_id: 0, slug: "cancerqld" },
	{
		id: 90833231,
		parent_id: 75884024,
		slug: "cancerqld/research",
	},
	{
		id: 90833232,
		parent_id: 90833231,
		slug: "cancerqld/research/viertel-cancer-research-centre",
	},
	{
		id: 76559303,
		parent_id: 75884024,
		slug: "cancerqld/",
	},
];
test("getParent: Get the Root ", () => {
	const expected: Tree = [{ id: 75884024, parent_id: 0, slug: "cancerqld" }];
	let tree = getParents(initial, "cancerqld");
	assert.equal(tree, expected);
});

test("getParent: Get the parent for grand kid ", () => {
	const expected: Tree = [
		{ id: 75884024, parent_id: 0, slug: "cancerqld" },
		{
			id: 90833231,
			parent_id: 75884024,
			slug: "cancerqld/research",
		},
		{
			id: 90833232,
			parent_id: 90833231,
			slug: "cancerqld/research/viertel-cancer-research-centre",
		},
	];
	let tree = getParents(
		initial,
		"cancerqld/research/viertel-cancer-research-centre"
	);
	assert.equal(tree, expected);
});

test.run();
