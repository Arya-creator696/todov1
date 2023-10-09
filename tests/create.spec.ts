import { test, expect } from "@playwright/test";
import { createTodo, deleteToDo } from "../util/todo";

test("Creation of todo should work without passing status", async ({
  request,
}, testInfo) => {
  const { status, body } = await createTodo(request, {
    title: "Work started",
  });
  expect(status).toBe(201);
  expect(body.title).toBe("Work started");
  expect(body.id).not.toBe(null);
  testInfo["id"] = body.id;
});
test.afterEach(async ({ request }, testInfo) => {
  const id = testInfo["id"];
  const status = await deleteToDo(request, id);
  expect(status).toBe(200);
});
