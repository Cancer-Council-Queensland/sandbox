import { generatePaths } from "../generatePaths";
import { test } from "uvu";
import * as assert from "uvu/assert";

test("generatePaths: undefined", () => {
	assert.equal(generatePaths({}), [])
});

test.run()
