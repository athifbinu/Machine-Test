import React from 'react'
import "./Cart.css"
import {RxPerson} from "react-icons/rx"
const Cart = () => {
  return (
    <div className="invoice-section">

      <div className="invoice-area">
        <div className="left-area">
          <div className="order-category">
            <button>
              <span><RxPerson/></span>
            </button>
            <button>
              <span><RxPerson/></span>
            </button>
            <button>
              <span><RxPerson/></span>
            </button>
            <button>
              <span><RxPerson/></span>
            </button>
          </div>
        </div>

        <div className="right-area">
          <div className="cart">
            <button className='cart-btne'>Dine in</button>
            <button className='cart-btn'>Home Delivery</button>
            <button className='cart-btn'>Pickup</button>

            <table className='table'>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Qty</th>
                  <th>Price</th>
                  <th>Amount</th>

                </tr>
              </thead>

              <tbody >
                <td>Chiken Burger</td>
                <td><button>-</button> 1 <button>+</button> </td>
                <td>₹ 130.00</td>
                <td>₹ 130.00</td>



              </tbody>

              <tbody>
                <td>Beef Burger</td>
                <td><button>-</button> 1 <button>+</button> </td>
                <td>₹ 130.00</td>
                <td>₹ 130.00</td>

              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="cart-data">
        <div className="right-section">
          <div className='datas'>
            <p>Package :</p>
            <input type="text" placeholder='₹ 0.00' />
          </div>

          <div className='datas'>
            <p>Discount :</p>
            <input type="text" placeholder='₹ 0.00' />
          </div>

          <div className='datas'>
            <p>Tips :</p>
            <input type="text" placeholder='₹ 0.00' />
          </div>
        </div>

        <div className="left-section">
          <div className='datas'>
            <p>Sub total:</p>
            <span>₹260.00</span>
          </div>
          <div className='datas'>
            <p>Tax:</p>
            <span>₹1.00</span>
          </div>
          <div className='datas'>
            <p>Balance:</p>
            <span>₹261.00</span>
          </div>
        </div>
      </div>

      <hr></hr>

      <div className="total-sum">
        <p>Grand Total :</p>
        <span>₹260.00</span>
      </div>

      <div className="function-area">
        <button className='btn-red'>save</button>
        <button className='btn-red'>Save & Print</button>
        <button className='btn-red'>Save & eBill</button>
        <button>Reset</button>
        <button className='btn-gray'>KOT</button>
        <button className='btn-gray'>KOT & Print</button>
        <button>Hold</button>
        <button className='btn-gray'>Split</button>
      </div>
    </div>

  )
}

export default Cart
