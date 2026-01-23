import {test} from '@playwright/test'
import {OrderDTO} from '../dto/OrderDTO'

test('DTO test', async ({request}) => {
  const requestBody = OrderDTO.createOrderDto()

  console.log(requestBody)
})