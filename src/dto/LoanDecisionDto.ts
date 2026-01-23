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
    loanPeriod: number

  ) {
    this.income = income
    this.debt = debt
    this.age = age
    this.employed = employed
    this.loanAmount = loanAmount
    this.loanPeriod = loanPeriod
  }
  // Negative Scenarios
  static underagePerson(): LoanDecisionRequestDto {
    return new LoanDecisionRequestDto(
      1500,
      0,
      16,
      true,
      10000,
      12
    )
  }
  static negativeDebt(): LoanDecisionRequestDto {
    return new LoanDecisionRequestDto(
      2000,
      -1500,
      23,
      true,
      750,
      12
    )
  }
  static zeroIncome(): LoanDecisionRequestDto {
    return new LoanDecisionRequestDto(
      0,
      0,
      20,
      
    )
  }
}