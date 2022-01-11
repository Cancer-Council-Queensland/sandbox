import { test } from "uvu";
import * as assert from "uvu/assert";
import { Suite } from "benchmark";
import { getRoot } from "../getParents";
import test_nodes from "./_nodes";

// TODO: Remove
/**
 * @intial - Initial  common array with nodes
 * @test   - empty array
 * @test   - get parent, child, and leaf
 */

// TODO: Comment
/**
 *
 */
test("getRoot:  get parent, child, and leaf", () => {
	let expect = [
		{ id: 1, parent_id: 0, slug: "cancerqld" },
		{
			id: 2,
			parent_id: 1,
			slug: "cancerqld/",
		},
	];

	let tree = getRoot(test_nodes, 2);
	assert.equal(tree, expect);
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
		.add("getRoot", () => getRoot.apply(getRoot, args))
		.on("cycle", (e) => console.log("  " + e.target))
		.run();
}

bench("3-depth tree", test_nodes, 3);
