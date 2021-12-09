import { cleanLink } from "../cleanLink";
import { test } from "uvu";
import * as assert from "uvu/assert";

test("cleanLink: cancerqld", () => {
	assert.equal(cleanLink('cancerqld'), 'cancerqld')
});

test.run()
