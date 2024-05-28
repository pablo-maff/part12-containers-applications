import { test, expect } from '@playwright/test';
import process from 'process';

const todoName = "Test Todo"

test.describe('Todo app', () => {
  test.beforeEach(async ({ page, request }) => {
    await request.post(`${process.env.VITE_BACKEND_URL}/todos/reset`)
    await page.goto('/')
  })

  test('can create a todo and change its importance', async ({ page }) => {
    await page.getByRole('textbox').fill(todoName)
    await page.getByRole('button', { name: /submit/i }).click()

    const newTodo = await page.getByRole('list')
    const newTodoName = await newTodo.getByText(todoName)

    await expect(newTodoName).toBeVisible()

    await newTodo.getByRole('button', { name: "Set as done" }).click()
    const doneText = await newTodo.getByText("This todo is done")

    await expect(doneText).toBeVisible()
  });
})