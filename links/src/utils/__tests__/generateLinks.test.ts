import { generateLinks, totree } from "../generateLinks";
import { test } from "uvu";
import * as assert from "uvu/assert";

test("generateLinks: ", () => {
	generateLinks().then((data) => {
		assert.equal(data, []);
	});
});

test("totree: empty array", () => {
	let tree = totree([], 0);
	assert.equal(tree, []);
});

test("totree: array with one child", () => {
	let tree = totree(tree2, 75884025);
	assert.equal(tree, tree2);
});

type types = {
	id: number;
	parent_id: number;
};
type type2 = {
	id: number;
	parent_id: number;
	children: {
		id: number;
		parent_id: number;
	};
};
const tree2: types[] = [
	{
		id: 76174760,
		parent_id: 75884025,
	},
];
const tree3: type2[] = [
	{
		id: 90833231,
		parent_id: 75884024,
		children: {
			id: 90833232,
			parent_id: 90833231,
		},
	},
];
test("totree: array with grand child", () => {
	let tree = totree(tree3, 75884024);
	assert.equal(tree, tree3);
});

test.run();
