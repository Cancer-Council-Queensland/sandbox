import { generateLinks } from "../generateLinks";
import { test } from "uvu";
import * as assert from "uvu/assert";

test("generateLinks:", () => {
	generateLinks().then((data) => {
		assert.equal(data, []);
	});
});

test.run();
