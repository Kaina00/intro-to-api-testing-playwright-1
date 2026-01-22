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