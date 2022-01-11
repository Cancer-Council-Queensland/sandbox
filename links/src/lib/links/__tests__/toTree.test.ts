import { test } from "uvu";
import * as assert from "uvu/assert";
import { Suite } from "benchmark";
import { toTree } from "../toTree";
import { Tree } from "../types";
import test_nodes from "./_nodes";

// TODO: Comment
/**
 *
 */
test("totree: array of nodes with grandchild", () => {
	const expected: Tree = [
		{
			id: 1,
			parent_id: 0,
			slug: "cancerqld",
			children: [
				{ id: 2, parent_id: 1, slug: "cancerqld/", children: undefined },
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
			],
		},
	];
	let tree = toTree(test_nodes);
	assert.equal(tree, expected);
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
		.add("toTree", () => toTree.apply(toTree, args))
		.on("cycle", (e) => console.log("  " + e.target))
		.run();
}

bench("3-depth tree", test_nodes);
