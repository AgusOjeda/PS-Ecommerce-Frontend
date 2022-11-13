import { OrderList } from '../components/dashboard/OrderList.js'
import { GetOrders } from '../services/OrdenService.js'
import { OrderRow } from '../components/dashboard/OrderRow.js'
import { SellCard } from '../components/dashboard/sellCard.js'
let _root
let orderBody
const RenderRow = async (orders) => {
  orders.forEach((order) => {
    const newRow = OrderRow(order)
    orderBody.innerHTML += newRow
  })
  Details()
}
const Details = () => {
  const detailButton = document.getElementsByClassName('detail-buton')
  for (const value of detailButton) {
    value.addEventListener('click', (event) => {
      const row = event.target.parentElement.parentElement.parentElement
      console.log(row)
      const hi = document.createElement('h1')
      hi.innerHTML = 'hola'
      row.appendChild(hi)
    })
  }
}
export const OrderTableRender = async () => {
  const body = OrderList()
  // const card = SellCard()
  let fromValue, toValue
  _root = document.getElementById('root')
  _root.innerHTML = body
  const newFirstElement = document.createElement('section')
  newFirstElement.setAttribute('id', 'sell-cards')
  newFirstElement.setAttribute('class', 'grid grid-cols-2 gap-4')

  GetOrders('', '', (data) => {
    newFirstElement.innerHTML = SellCard(data)
    _root.insertBefore(newFirstElement, _root.firstChild)
    RenderRow(data.sales)
  })

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
        newFirstElement.innerHTML = SellCard(data)
        _root.insertBefore(newFirstElement, _root.firstChild)
        RenderRow(data.sales)
      })
    } else {
      console.log('fromValue', fromValue)
      GetOrders(fromValue, '', (data) => {
        newFirstElement.innerHTML = SellCard(data)
        _root.insertBefore(newFirstElement, _root.firstChild)
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
        newFirstElement.innerHTML = SellCard(data)
        _root.insertBefore(newFirstElement, _root.firstChild)
        RenderRow(data.sales)
      })
    } else {
      console.log('toValue', toValue)
      GetOrders('', toValue, (data) => {
        newFirstElement.innerHTML = SellCard(data)
        _root.insertBefore(newFirstElement, _root.firstChild)
        RenderRow(data.sales)
      })
    }
  })
}
