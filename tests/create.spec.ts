import { test, expect } from "@playwright/test";
import { createTodo, deleteToDo } from "../util/todo";
import { title } from "process";

// test.describe("Positive scenarios", () => {
//   test("Creation of todo should work with passing status", async ({
//     request,
//   }, testInfo) => {
//     const { status, body } = await createTodo(request, {
//       title: "First test",
//       status: "DONE",
//     });
//     testInfo["id"] = body.id;
//     expect(status).toBe(201);
//     expect(body.title).toBe("First test");
//     expect(body.id).not.toBe(null);
//     expect(body.status).toBe("DONE");
//   });
//   test("Creation of todo should work without passing status", async ({
//     request,
//   }, testInfo) => {
//     const { status, body } = await createTodo(request, {
//       title: "Work started",
//     });
//     expect(status).toBe(201);
//     expect(body.title).toBe("Work started");
//     expect(body.id).not.toBe(null);
//     testInfo["id"] = body.id;
//   });
//   test.afterEach(async ({ request }, testInfo) => {
//     const id = testInfo["id"];
//     const status = await deleteToDo(request, id);
//     expect(status).toBe(200);
//   });

test.describe("Negative scenarios", () => {
  test("Creation of Todo should give 400 when title field is not passed", async ({
    request,
  }) => {
    const { status } = await createTodo(request, {
      status: "ACTIVE",
    });
    await expect(status).toBe(400);
  });
  test("Creation of todo should give 400 when status value is not eaither ACTIVE or DONE", async ({
    request,
  }) => {
    const { status } = await createTodo(request, {
      status: "Arya",
    });
    await expect(status).toBe(400);
  });
});
//});
