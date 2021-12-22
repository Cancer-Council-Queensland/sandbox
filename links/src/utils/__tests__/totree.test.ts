import { toTree, Tree, Node } from "../generateLinks";
import { test } from "uvu";
import * as assert from "uvu/assert";

let initial: Node[] = [
	{ id: 75884024, parent_id: 0, slug: "1" },
	{ id: 76559303, parent_id: 75884024, slug: "1/" },
	{ id: 90833231, parent_id: 75884024, slug: "1/2" },
	{ id: 90833232, parent_id: 90833231, slug: "1/2/3" },
];

test("totree: array  of nodes with grand child", () => {
	const expected: Tree = [
		{
			id: 75884024,
			parent_id: 0,
			slug: "1",
			children: [
				{ id: 76559303, parent_id: 75884024, slug: "1/", children: undefined },
				{
					id: 90833231,
					parent_id: 75884024,
					slug: "1/2",
					children: [
						{
							id: 90833232,
							parent_id: 90833231,
							slug: "1/2/3",
							children: undefined,
						},
					],
				},
			],
		},
	];
	let tree = toTree(initial);
	assert.equal(tree, expected);
});

test.run();
