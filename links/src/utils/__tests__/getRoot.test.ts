import { Tree, Node } from "../generateLinks";
import { test } from "uvu";
import * as assert from "uvu/assert";
import { getRoot } from "../getParent";

/**
 * @intial - Initial  common array with nodes
 * @test   - empty array
 * @test   - get parent, child, and leaf
 */

let initial: Node[] = [
	{ id: 75884024, parent_id: 0, slug: "1" },
	{ id: 76559303, parent_id: 75884024, slug: "1/" },
	{ id: 90833231, parent_id: 75884024, slug: "1/2" },
	{ id: 90833232, parent_id: 90833231, slug: "1/2/3" },
];
test("getRoot:  get parent, child, and leaf ", () => {
	let expect: Tree = [
		{
			id: 75884024,
			parent_id: 0,
			slug: "1",
		},
		{
			id: 90833231,
			parent_id: 75884024,
			slug: "1/2",
		},
	];
	let tree = getRoot(initial, 90833231);
	assert.equal(tree, expect);
});

test("getRoot: ", () => {
	let expect: Tree = [];
	let tree = getRoot(initial);
	assert.equal(tree, expect);
});

test.run();
