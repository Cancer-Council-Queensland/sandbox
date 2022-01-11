import { test } from "uvu";
import * as assert from "uvu/assert";
import { Suite } from "benchmark";
import { getParents } from "../getParents";
import { Node } from "../types";
import test_nodes from "./_nodes";

// TODO: Remove
/**
 * @intial - Initial  common array with nodes
 * @test   - duplicate value, case sensitive, empty array
 * @test   - sibling with child/leaf
 * @test   - node with no siblings
 */

// TODO: Comment
/**
 *
 */
test("getParent: Get the root", () => {
	let expected: Node[] = [{ id: 1, parent_id: 0, slug: "cancerqld" }];
	let slug = "cancerqld";
	let nodes = getParents(test_nodes, slug);
	assert.equal(nodes, expected);
});

// TODO: Comment
/**
 *
 */
test("getParent: Get the parent for grandchild", () => {
	let expected: Node[] = [
		{ id: 1, parent_id: 0, slug: "cancerqld" },
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
	];
	let slug = "cancerqld/research/viertel-cancer-research-centre";
	let nodes = getParents(test_nodes, slug);
	assert.equal(nodes, expected);
});

// TODO: Comment
/**
 *
 */
test("getParent: Get the parent for grandchild", () => {
	let expected: Node[] = [
		{ id: 1, parent_id: 0, slug: "cancerqld" },
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
	let slug = "cancerqld/support/contact";
	let nodes = getParents(test_nodes, slug);
	assert.equal(nodes, expected);
});

// TODO: Comment
/**
 *
 */
test("getParent: Get the parent for child", () => {
	let expected: Node[] = [
		{ id: 1, parent_id: 0, slug: "cancerqld" },
		{
			id: 5,
			parent_id: 1,
			slug: "cancerqld/support",
		},
	];
	let slug = "cancerqld/support";
	let nodes = getParents(test_nodes, slug);
	assert.equal(nodes, expected);
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
		.add("getParents", () => getParents.apply(getParents, args))
		.on("cycle", (e) => console.log("  " + e.target))
		.run();
}

bench("3-depth tree", test_nodes, "cancerqld/support");
