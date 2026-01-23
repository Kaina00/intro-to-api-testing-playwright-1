export class LoanDecisionRequestDto {
  income: number
  debt: number
  age: number
  employed: boolean
  loanAmount: number
  loanPeriod: number

  constructor(
    income: number,
    debt: number,
    age: number,
    employed: boolean,
    loanAmount: number,
    loanPeriod: number,
  ) {
    this.income = income
    this.debt = debt
    this.age = age
    this.employed = employed
    this.loanAmount = loanAmount
    this.loanPeriod = loanPeriod
  }
  // Invalid Input Scenarios

  // age must be > 18
  static underagePerson(): LoanDecisionRequestDto {
    return new LoanDecisionRequestDto(1500, 0, 0, true, 10000, 12)
  }

  // debt must not be negative
  static negativeDebt(): LoanDecisionRequestDto {
    return new LoanDecisionRequestDto(2000, -1500, 23, true, 750, 12)
  }

  // income must be > 0
  static zeroIncome(): LoanDecisionRequestDto {
    return new LoanDecisionRequestDto(0, 0, 20, true, 500, 12)
  }
  // Valid Input Scenarios

  // Very High Risk → Negative Decision
  static veryHighRisk(): LoanDecisionRequestDto {
    return new LoanDecisionRequestDto(800, 1500, 21, true, 500, 18)
  }

  //  High Risk
  static highRisk(): LoanDecisionRequestDto {
    return new LoanDecisionRequestDto(800, 1500, 25, true, 1000, 6)
  }

  // Medium Risk
  static mediumRisk(): LoanDecisionRequestDto {
    return new LoanDecisionRequestDto(20000, 0, 40, true, 500, 9)
  }

  // Low Risk
  static lowRisk(): LoanDecisionRequestDto {
    return new LoanDecisionRequestDto(20000, 0, 25, true, 500, 12)
  }
}
