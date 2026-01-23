export class OrderDTO {
  customerName: string
  customerPhone: string
  comment: string
  id: number

  private constructor(id: number, customerName: string, customerPhone: string, comment: string) {
    this.id = id
    this.customerName = customerName
    this.customerPhone = customerPhone
    this.comment = comment
  }

  static createOrderDto(): OrderDTO {
    return new OrderDTO(
      Math.floor(Math.random()*100),
      'John',
      '123456798',
      'wants fast delivery'
    )
  }
}