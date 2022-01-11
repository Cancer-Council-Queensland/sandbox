import { test } from "uvu";
import * as assert from "uvu/assert";
import { getLinks } from "../getLinks";

/**
 * Assert that the getLinks return value is an Object
 */
test("getLinks: Object assertion", () => {
	getLinks().then((data) => {
		assert.instance(data, Object);
	});
});

test.run();
