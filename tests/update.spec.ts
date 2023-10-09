import { test, expect } from "@playwright/test";
test.describe("when to is created", () => {
  test.beforeEach(() => {
    //create todo here
    //store body/ id
  });
  test("", () => {
    //get id/body from testInfo
    //use it for patch/post
  });
  test.afterEach(() => {
    //get id/body from testInfo
    //used id to delete todo created here
  });
});
