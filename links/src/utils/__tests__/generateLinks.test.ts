import { generateLinks } from "../generateLinks";
import { test } from "uvu";
import * as assert from "uvu/assert";

test("generateLinks: ", async () => {
	let data = await generateLinks();
	assert.instance(data, Array);
});

test.run();
