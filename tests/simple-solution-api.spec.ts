import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'

  // Test GET - Get Order Details

test('GET - Order with valid ID, return 200', async ({request}) => {
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/5')
  expect(response.status()).toBe(StatusCodes.OK)
})

test('GET - Order with invalid ID, return 400', async ({request}) => {
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/0')
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('GET - Test order time without headers, return 400', async ({request}) => {
  const response = await request.get('https://backend.tallinn-learning.ee/test-orders/time/5')
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

  // Test PUT - Update Existing Order

test('PUT - Update with valid ID and valid API key, return 200', async ({request}) => {
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/7', {
    headers: { api_key: '8952144734165486'},
    data: {status: 'OPEN'},
  })
  expect(response.status()).toBe(StatusCodes.OK)
})

test('PUT - Update without API key, return 400', async ({request}) => {
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/7', {
    data: {status: 'OPEN'},
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('PUT - Update with invalid API key, return 401', async ({request}) => {
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/7', {
    headers: {api_key: '5484964'},
    data: {status: 'OPEN'},
  })
  expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
})

test('PUT - Update order with empty request body, return 400', async ({request}) => {
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/7', {
    headers: {api_key: '8952144734165486'},
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('PUT - Update order with invalid ID, return 400', async ({request}) => {
  const response = await request.put('https://backend.tallinn-learning.ee/test-orders/57', {
    headers: {api_key: '8952144734165486'},
    data: {status: 'OPEN'},
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

// Test DELETE - Delete Order

test('DELETE - Order without API key, return 400', async ({request}) => {
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/57')
    expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})

test('DELETE - Order with invalid ID, return 400', async ({request}) => {
  const response = await request.delete('https://backend.tallinn-learning.ee/test-orders/57', {
    headers: {api_key: '8952144734165486'},
  })
  expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
})