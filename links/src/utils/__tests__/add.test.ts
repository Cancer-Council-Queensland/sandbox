import { test } from "uvu";
import * as assert from "uvu/assert";
import { add } from "../add";

test("add: 2 + 4", () => {
	let x = add(2, 4);
	assert.equal(x, 6);
});

test("add: 1 + 1", () => {
	let x = add(1, 1);
	assert.equal(x, 2);
});

test.run();
