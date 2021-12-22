import { test } from "uvu";
import * as assert from "uvu/assert";
import { getSiblings } from "../getSibling";
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

/**
 * @intial - Initial  common array with nodes
 * @test   - case sensitive
 * @test   - sibling with child/leaf
 * @test   - node with no siblings, empty array
 * @test   - duplicate value  -- yet to be implemented
 */
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

test("getSiblings: case Sensitive and duplicate ", () => {
	const actual: Tree = [
		{
			id: 90833231,
			parent_id: 0,
			slug: "cancerqld/Research",
			children: undefined,
		},
		{
			id: 90833231,
			parent_id: 75884024,
			slug: "cancerqld/research",
			children: undefined,
		},
	];
	const expected: Tree = [
		{
			id: 90833231,
			parent_id: 0,
			slug: "cancerqld/Research",
			children: undefined,
		},
	];
	let tree = getSiblings(actual, "cancerqld/Research");
	assert.equal(tree, expected);
});

test("getSiblings: empty slug ", () => {
	const expected: Tree = [];
	let tree = getSiblings(initial, "");
	assert.equal(tree, expected);
});

test("getSiblings: empty array ", () => {
	const actual: Tree = [];
	let tree = getSiblings(actual, "1/2");
	assert.equal(tree, []);
});
test.run();
