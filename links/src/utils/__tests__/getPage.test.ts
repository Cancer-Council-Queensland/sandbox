import { test } from "uvu";
import * as assert from "uvu/assert";
import { getPage } from "../getPage";

test("getPage: undefined", () => {
	getPage('cancerqld').then((data) => {
		assert.instance(data, Object)
	})
});

test.run()
