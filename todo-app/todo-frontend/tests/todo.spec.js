import { test, expect } from '@playwright/test';

const todoName = "Test Todo"

test.describe('Todo app', () => {
  test.beforeEach(async ({ page, request }) => {
    await request.post('http://host.docker.internal:3001/todos/reset')
    await page.goto('http://localhost:5173/')
  })

  test('can create a todo and change its importance', async ({ page }) => {
    await page.getByRole('textbox').fill(todoName)
    await page.getByRole('button', { name: /submit/i }).click()

    const newTodo = await page.getByRole('list')
    console.log("BEFORE waitFor", await page.content())

    await newTodo.waitFor()
    console.log(await page.content())
    const newTodoName = await newTodo.getByText(todoName)
    await expect(newTodoName).toBeVisible()

    await newTodo.getByRole('button', { name: "Set as done" }).click()

    const doneText = await newTodo.getByText("This todo is done")
    await expect(doneText).toBeVisible()
  });
})