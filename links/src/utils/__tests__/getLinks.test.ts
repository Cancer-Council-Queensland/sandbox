import { test } from "uvu";
import * as assert from "uvu/assert";
import { getLinks } from "../getLinks";

test("getLinks:", () => {
	getLinks().then((data) => {
		assert.instance(data, Object);
	});
});

test.run();
