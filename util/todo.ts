import { APIRequestContext } from "@playwright/test";

export async function createTodo(
  request: APIRequestContext,
  body: { title: string; status?: string }
) {
  const resp = await request.post("/v1/todo", {
    data: body,
    headers: {
      "Content-type": "application/json",
    },
  });
  return { status: resp.status(), body: await resp.json() };
}
export async function deleteToDo(request: APIRequestContext, id: number) {
  const resp = await request.delete(`/v1/todo/${id}`);
  return resp.status();
}
