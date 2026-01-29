import { expect, test } from '@playwright/test'
import { LoginDto } from '../dto/LoginDto'
import { LoanDecisionRequestDto } from '../dto/LoanDecisionDto'
import { StatusCodes } from 'http-status-codes'
import { request } from 'node:http'

test('should not be able to login without creditentials ', async ({ request }) => {
  const requestBody = LoginDto.createLoginWithCorrectData()
  const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
    data: requestBody,
  })
  expect(response.status()).toBe(401)
})

test('should be able to login with correct creditentials ', async ({ request }) => {
  const requestBody = LoginDto.createLoginWithCorrectData()
  const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
    data: requestBody,
  })
  expect(response.status()).toBe(200)

  const token = await response.text()

  const orderResponse = await request.post('https://backend.tallinn-learning.ee/orders', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  expect(response.status()).toBe(200)
})

test.describe('JWT Authentication', () => {
  test('Valid credentials return JWT', async ({ request }) => {
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: { username: 'string', password: 'string' },
    })
    expect.soft(response.status()).toBe(StatusCodes.OK)

    const jwtValue = await response.text()

    const jwtRegex = /^eyJhb[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+$/

    expect.soft(jwtValue).toMatch(jwtRegex)
  })

  test('Incorrect method, GET instead POST', async ({ request }) => {
    const response = await request.get('https://backend.tallinn-learning.ee/login/student', {
      data: { username: 'string', password: 'string' },
    })
    expect([StatusCodes.METHOD_NOT_ALLOWED, StatusCodes.BAD_REQUEST]).toContain(response.status())
  })

  test('Incorrect method, wrong password', async ({ request }) => {
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: { username: 'string', password: 'invalid' },
    })
    expect(response.status()).toBe(StatusCodes.UNAUTHORIZED)
  })

  test('Invalid body structure', async ({ request }) => {
    const response = await request.post('https://backend.tallinn-learning.ee/login/student', {
      data: { username: 'string' },
    })
    expect([StatusCodes.BAD_REQUEST, StatusCodes.UNAUTHORIZED]).toContain(response.status())
  })
})
