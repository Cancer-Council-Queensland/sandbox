import { generateLinks, toTree, Tree } from "../generateLinks";
import { test } from "uvu";
import * as assert from "uvu/assert";

const tree2: Tree = [
	{
		id: 76174760,
		parent_id: 75884025,
		slug: "onoty/",
	},
];

const tree3: Tree = [
	{
		id: 90833231,
		parent_id: 75884024,
		slug: "cancerqld/research",
		children: [
			{
				id: 90833232,
				parent_id: 90833231,
				slug: "cancerqld/research/viertel-cancer-research-centre",
			},
		],
	},
];

test("generateLinks: ", async () => {
	let data = await generateLinks();
	assert.instance(data, Array);
});

test("totree: array with one child", () => {
	let tree = toTree(tree2, 75884025);
	assert.equal(tree, tree2);
});

test("totree: array with grand child", () => {
	let tree = toTree(tree3, 75884024);
	assert.equal(tree, tree3);
});

test.run();
