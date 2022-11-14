import { OrderList } from '../components/dashboard/OrderList.js'
import { GetOrders } from '../services/OrdenService.js'
import { OrderRow } from '../components/dashboard/OrderRow.js'
import { SellCard } from '../components/dashboard/sellCard.js'
let _root
let orderBody
const RenderRow = async (orders) => {
  orders.forEach((order) => {
    const { row, modal, modalRows } = OrderRow(order)
    orderBody.innerHTML += row
    createModal(modal, modalRows)
    const modalTableBody = document.getElementById(`order-detail-${order.ordenId.toUpperCase()}`)
    for (const product of modalRows) {
      modalTableBody.innerHTML += product
    }
  })
  CloseModal()
  Details()
}
const createModal = (modal) => {
  const content = modal
  const modalContainer = document.getElementById('modal-container')
  modalContainer.innerHTML += content
}
const Details = () => {
  const detailButton = document.getElementsByClassName('detail-buton')
  for (const button of detailButton) {
    button.addEventListener('click', (event) => {
      const id = event.target.parentElement.parentElement.parentElement.children[0].innerHTML
      const detail = document.getElementById(`modal-${id}`)
      detail.parentElement.classList.toggle('hidden')
      detail.classList.toggle('hidden')
    })
  }
}
const CloseModal = () => {
  const closeButton = document.getElementsByClassName('close-modal')
  for (const button of closeButton) {
    button.addEventListener('click', (event) => {
      event.target.parentElement.parentElement.parentElement.parentElement.classList.toggle('hidden')
      event.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.toggle('hidden')
    })
  }
}
export const OrderTableRender = async () => {
  const content = OrderList()
  const modalContainer = document.createElement('div')
  modalContainer.setAttribute('id', 'modal-container')
  modalContainer.classList.add('fixed', 'inset-0', 'bg-gray-700', 'bg-opacity-75', 'font-GilroyRegular', 'hidden')
  document.body.append(modalContainer)
  // const card = SellCard()
  let fromValue, toValue
  _root = document.getElementById('root')
  _root.innerHTML = content
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
      GetOrders(fromValue, toValue, (data) => {
        newFirstElement.innerHTML = SellCard(data)
        _root.insertBefore(newFirstElement, _root.firstChild)
        RenderRow(data.sales)
      })
    } else {
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
      GetOrders(fromValue, toValue, (data) => {
        newFirstElement.innerHTML = SellCard(data)
        _root.insertBefore(newFirstElement, _root.firstChild)
        RenderRow(data.sales)
      })
    } else {
      GetOrders('', toValue, (data) => {
        newFirstElement.innerHTML = SellCard(data)
        _root.insertBefore(newFirstElement, _root.firstChild)
        RenderRow(data.sales)
      })
    }
  })
}
