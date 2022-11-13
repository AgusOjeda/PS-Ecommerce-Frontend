import { OrderList } from '../components/dashboard/OrderList.js'
import { GetOrders } from '../services/OrdenService.js'
import { OrderRow } from '../components/dashboard/OrderRow.js'
let _root
let orderBody
const RenderRow = async (orders) => {
  orders.forEach((order) => {
    const newRow = OrderRow(order)
    orderBody.innerHTML += newRow
  })
}

export const OrderTableRender = async () => {
  const body = OrderList()
  let fromValue, toValue
  _root = document.getElementById('root')
  _root.innerHTML = body

  const from = document.getElementById('from')
  const to = document.getElementById('to')
  orderBody = document.getElementById('order-body')
  from.addEventListener('change', (e) => {
    orderBody.innerHTML = ''
    fromValue = e.target.value
    if (fromValue && toValue) {
      console.log('fromValue', fromValue)
      console.log('toValue', toValue)
      GetOrders(fromValue, toValue, (data) => {
        RenderRow(data.sales)
      })
    } else {
      console.log('fromValue', fromValue)
      GetOrders(fromValue, '', (data) => {
        RenderRow(data.sales)
      })
    }
  })
  to.addEventListener('change', (e) => {
    orderBody.innerHTML = ''
    toValue = e.target.value
    if (fromValue && toValue) {
      console.log('fromValue', fromValue)
      console.log('toValue', toValue)
      GetOrders(fromValue, toValue, (data) => {
        RenderRow(data.sales)
      })
    } else {
      console.log('toValue', toValue)
      GetOrders('', toValue, (data) => {
        RenderRow(data.sales)
      })
    }
  })
  GetOrders('', '', (data) => {
    RenderRow(data.sales)
  })
}
