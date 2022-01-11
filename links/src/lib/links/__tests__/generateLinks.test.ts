import { generateLinks } from "../generateLinks";
import { test } from "uvu";
import * as assert from "uvu/assert";

/**
 * Assert that the generateLinks return value is an array
 */
test("generateLinks: Array assertion", async () => {
	let data = await generateLinks();
	assert.instance(data, Array);
});

test.run();
