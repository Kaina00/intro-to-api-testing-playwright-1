import { expect, test } from '@playwright/test'
import {OrderDto} from '../dto/OrderDto'

test('Dto test', async ({request}) => {
  const requestBody = OrderDto.createOrderWithRandomData()
 // console.log(requestBody)

  const response = await request.post ('https://backend.tallinn-learning.ee/test-orders', {
    data: requestBody
  })
  await expect(response).toBeOK()
  const responseBody = await response.json()
  console.log(responseBody)

  expect.soft(responseBody.status).toBe('OPEN')
  expect.soft(responseBody.customerName).toBe(requestBody.customerName)
  expect.soft(responseBody.courierId).toBe(requestBody.courierId)
  expect.soft(responseBody.customerPhone).toBe(requestBody.customerPhone)
  expect.soft(responseBody.comment).toBe(requestBody.comment)
  expect.soft(responseBody.id).toBeGreaterThanOrEqual(0)

})