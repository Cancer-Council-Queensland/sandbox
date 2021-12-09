import { generatePath } from "../generatePath";
import { test } from "uvu";
import * as assert from "uvu/assert";

test("generatePath: undefined", () => {
	assert.equal(generatePath({ slug: undefined }), { slug: '', site: undefined })
});

test.run()
