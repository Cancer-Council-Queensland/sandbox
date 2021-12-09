import { generateLinks } from "../generateLinks";
import { test } from "uvu";
import * as assert from "uvu/assert";

test("generateLinks: cancerqld", () => {
	generateLinks('cancerqld').then((data) => {
		assert.equal(data, []);
	})
});

test.run()
