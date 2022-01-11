import { test } from "uvu";
import * as assert from "uvu/assert";
import { Suite } from "benchmark";
import { getSiblings } from "../getSiblings";
import test_nodes from "./_nodes";
import { Tree } from "../types";

// TODO: Remove
/**
 * @intial - Initial  common array with nodes
 * @test   - case sensitive
 * @test   - sibling with child/leaf
 * @test   - node with no siblings, empty array
 * @test   - duplicate value  -- yet to be implemented
 */

// TODO: Comment
/**
 *
 */
test("getSiblings: Get siblings with child", () => {
	let expected: Tree = [
		{
			id: 2,
			parent_id: 1,
			slug: "cancerqld/",
			children: undefined,
		},
		{
			id: 3,
			parent_id: 1,
			slug: "cancerqld/research",
			children: [
				{
					id: 4,
					parent_id: 3,
					slug: "cancerqld/research/viertel-cancer-research-centre",
					children: undefined,
				},
			],
		},
		{
			id: 5,
			parent_id: 1,
			slug: "cancerqld/support",
			children: [
				{
					id: 6,
					parent_id: 5,
					slug: "cancerqld/support/contact",
					children: undefined,
				},
			],
		},
	];
	let tree = getSiblings(test_nodes, "cancerqld/research");
	assert.equal(tree, expected);
});

// TODO: Comment
/**
 *
 */
test("getSiblings: Get a node with no sibling", () => {
	let expected: Tree = [
		{
			id: 4,
			parent_id: 3,
			slug: "cancerqld/research/viertel-cancer-research-centre",
			children: undefined,
		},
	];
	let tree = getSiblings(
		test_nodes,
		"cancerqld/research/viertel-cancer-research-centre"
	);
	assert.equal(tree, expected);
});

// TODO: Comment
/**",
 *
 */
test("getSiblings: case Sensitive and duplicate", () => {
	let actual: Tree = [
		{
			id: 1,
			parent_id: 0,
			slug: "cancerqld/Research",
			children: undefined,
		},
		{
			id: 2,
			parent_id: 0,
			slug: "cancerqld/research",
			children: undefined,
		},
	];
	let expected: Tree = [
		{
			id: 1,
			parent_id: 0,
			slug: "cancerqld/Research",
			children: undefined,
		},
		{
			id: 2,
			parent_id: 0,
			slug: "cancerqld/research",
			children: undefined,
		},
	];
	let tree = getSiblings(actual, "cancerqld/Research");
	assert.equal(tree, expected);
});

// TODO: Comment
/**
 *
 */
test("getSiblings: empty slug", () => {
	let expected: Tree = [];
	let tree = getSiblings(test_nodes, "");
	assert.equal(tree, expected);
});

// TODO: Comment
/**
 *
 */
test("getSiblings: empty array", () => {
	let tree = getSiblings([], "1/2");
	assert.equal(tree, []);
});

test.run();

/**
 * Benchmarks
 * @param name
 * @param args
 */
function bench(name, ...args) {
	console.log(`\n# ${name}`);
	new Suite()
		.add("getSiblings", () => getSiblings.apply(getSiblings, args))
		.on("cycle", (e) => console.log("  " + e.target))
		.run();
}

bench("3-depth tree", test_nodes);
