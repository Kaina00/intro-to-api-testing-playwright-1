import { expect, test } from '@playwright/test'
import { StatusCodes } from 'http-status-codes'
import { LoanDecisionRequestDto } from '../dto/LoanDecisionDto'

test.describe('Invalid Input ', () => {
  test('400 - invalid input: underage', async ({ request }) => {
    const requestBody = LoanDecisionRequestDto.underagePerson()

    const response = await request.post(
      'https://backend.tallinn-learning.ee/api/loan-calc/decision',
      { data: requestBody },
    )
    expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  })

  test('400 - invalid input: negative debt', async ({ request }) => {
    const requestBody = LoanDecisionRequestDto.negativeDebt()

    const response = await request.post(
      'https://backend.tallinn-learning.ee/api/loan-calc/decision',
      { data: requestBody },
    )
    expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  })

  test('400 - invalid input: zero income', async ({ request }) => {
    const requestBody = LoanDecisionRequestDto.zeroIncome()

    const response = await request.post(
      'https://backend.tallinn-learning.ee/api/loan-calc/decision',
      { data: requestBody },
    )
    expect(response.status()).toBe(StatusCodes.BAD_REQUEST)
  })
})
test.describe('Positive decision with Low Risk', () => {
  test('Low Risk Level, Positive decision', async ({ request }) => {
    const requestBody = LoanDecisionRequestDto.lowRisk()

    const response = await request.post(
      'https://backend.tallinn-learning.ee/api/loan-calc/decision',
      { data: requestBody },
    )
    expect(response.status()).toBe(StatusCodes.OK)

    const body = await response.json()

    expect(body.riskDecision).toBe('positive')
    expect(body.riskLevel).toBe('Low Risk')
  })

  test('Low Risk - [12, 18, 24, 30, 36] risk period', async ({ request }) => {
    const requestBody = LoanDecisionRequestDto.lowRisk()

    const response = await request.post(
      'https://backend.tallinn-learning.ee/api/loan-calc/decision',
      { data: requestBody },
    )
    expect(response.status()).toBe(StatusCodes.OK)

    const body = await response.json()

    expect(body.riskPeriods).toEqual([12, 18, 24, 30, 36])
  })
})

test.describe('Positive decision with Medium Risk', () => {
  test('Medium Risk Level, Positive decision', async ({ request }) => {
    const requestBody = LoanDecisionRequestDto.mediumRisk()

    const response = await request.post(
      'https://backend.tallinn-learning.ee/api/loan-calc/decision',
      { data: requestBody },
    )
    expect(response.status()).toBe(StatusCodes.OK)

    const body = await response.json()

    expect(body.riskDecision).toBe('positive')
    expect(body.riskLevel).toBe('Medium Risk')
  })

  test('Medium Risk - [6, 9, 12] risk period', async ({ request }) => {
    const requestBody = LoanDecisionRequestDto.mediumRisk()

    const response = await request.post(
      'https://backend.tallinn-learning.ee/api/loan-calc/decision',
      { data: requestBody },
    )
    expect(response.status()).toBe(StatusCodes.OK)

    const body = await response.json()

    expect(body.riskPeriods).toEqual([6, 9, 12])
  })
})

test.describe('Positive decision with High Risk', () => {
  test('High Risk Level, Positive decision', async ({ request }) => {
    const requestBody = LoanDecisionRequestDto.highRisk()

    const response = await request.post(
      'https://backend.tallinn-learning.ee/api/loan-calc/decision',
      { data: requestBody },
    )
    expect(response.status()).toBe(StatusCodes.OK)

    const body = await response.json()

    expect(body.riskDecision).toBe('positive')
    expect(body.riskLevel).toBe('High Risk')
  })

  test('High Risk - [3, 6] risk period', async ({ request }) => {
    const requestBody = LoanDecisionRequestDto.highRisk()

    const response = await request.post(
      'https://backend.tallinn-learning.ee/api/loan-calc/decision',
      { data: requestBody },
    )
    expect(response.status()).toBe(StatusCodes.OK)

    const body = await response.json()

    expect(body.riskPeriods).toEqual([3, 6])
  })
})
test.describe('Negative Decisions', () => {
  test('Negative decision, Very High Risk', async ({ request }) => {
    const requestBody = LoanDecisionRequestDto.veryHighRisk()

    const response = await request.post(
      'https://backend.tallinn-learning.ee/api/loan-calc/decision',
      { data: requestBody },
    )
    expect(response.status()).toBe(StatusCodes.OK)

    const body = await response.json()

    expect(body.riskDecision).toBe('negative')
    expect(body.riskLevel).toBe('Very High Risk')
    console.log(await response.json())
  })
})
