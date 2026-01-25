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
