# Checklist for API Testing - Homework 10

Checklist based on the implemented Playwright API tests.

# GET - Get Order Details
| No | Scenario                            | Expected Status | Status |
|----|-------------------------------------|-----------------|--------|
| 1  | Get order with valid ID             | 200 OK          | ✅ Done |
| 2  | Get order with invalid ID           | 400 Bad Request | ✅ Done |
| 3  | Get test order time without headers | 400 Bad Request | ✅ Done |

# PUT - Update Existing Order

| No | Scenario                               | Expected Status  | Status |
|----|----------------------------------------|------------------|--------|
| 4  | Update order with valid ID and API key | 200 OK           | ✅ Done |
| 5  | Update order without API key           | 400 Bad Request  | ✅ Done |
| 6  | Update order with invalid API key      | 401 Unauthorized | ✅ Done |
| 7  | Update order with empty request body   | 400 Bad Request  | ✅ Done |
| 8  | Update order with invalid ID           | 400 Bad Request  | ✅ Done |

# DELETE - Delete Order
| No | Scenario                     | Expected Status | Status |
|----|------------------------------|-----------------|--------|
| 9  | Delete order without API key | 400 Bad Request | ✅ Done |
| 10 | Delete order with invalid ID | 400 Bad Request | ✅ Done |


# Checklist for API Testing - Homework 11

Checklist based on the implemented Playwright API tests.

# Invalid Input
| No | Scenario                      | Expected Status | Status |
|----|-------------------------------|-----------------|--------|
| 1  | Invalid Input - Underage      | 400 Bad Request | ✅ Done |
| 2  | Invalid Input - Negative Debt | 400 Bad Request | ✅ Done |
| 3  | Invalid Input - Zero Income   | 400 Bad Request | ✅ Done |

# Low Risk - Positive decision
| No | Scenario                     | Expected Status      | Status |
|----|------------------------------|----------------------|--------|
| 4  | Low Risk, Positive decision  | 200 OK               | ✅ Done |
| 5  | riskDecision                 | 'positive'           | ✅ Done |
| 6  | riskLevel                    | 'Low Risk'           | ✅ Done |
| 7  | riskPeriod                   | [12, 18, 24, 30, 36] | ✅ Done |

# Medium Risk - Positive Decision
| No | Scenario                       | Expected Status | Status |
|----|--------------------------------|-----------------|--------|
| 8  | Medium Risk, Positive decision | 200 OK          | ✅ Done |
| 9  | riskDecision                   | 'positive'      | ✅ Done |
| 10 | riskLevel                      | 'Medium Risk'   | ✅ Done |
| 11 | riskPeriod                     | [6, 9, 12]      | ✅ Done |

# High Risk - Positive Decision
| No | Scenario                     | Expected Status | Status |
|----|------------------------------|-----------------|--------|
| 12 | High Risk, Positive decision | 200 OK          | ✅ Done |
| 13 | riskDecision                 | 'positive'      | ✅ Done |
| 14 | riskLevel                    | 'High Risk'     | ✅ Done |
| 15 | riskPeriod                   | [3, 6 ]         | ✅ Done |

# Negative Decision - Very High Risk
| No | Scenario                     | Expected Status  | Status |
|----|------------------------------|------------------|--------|
| 12 | High Risk, Positive decision | 200 OK           | ✅ Done |
| 13 | riskDecision                 | 'negative'       | ✅ Done |
| 14 | riskLevel                    | 'Very High Risk' | ✅ Done |


# API Test Scenarios for homework 12

Checklist based on the implemented Playwright API tests.

| No | Scenario                           | Expected Status                         | Status |
|----|------------------------------------|-----------------------------------------|--------|
| 15 | Valid credentials return JWT       | expect.soft(jwtValue).toMatch(jwtRegex) | ✅ Done |
| 16 | Incorrect method, GET instead POST | METHOD_NOT_ALLOWED, BAD_REQUEST         | ✅ Done |
| 17 | Incorrect method, wrong password   | UNAUTHORIZED                            | ✅ Done |
| 18 | Invalid body structure             | BAD_REQUEST, UNAUTHORIZED               | ✅ Done |