import React from 'react'

function Cart() {
  return (
    <>
    <div className="row p-2">
        <div className="col-8">
            <h3>Cart Summary</h3>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>iphone 13</td>
                        <td>
                            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61l9ppRIiqL.jpg&f=1&nofb=1&ipt=f458f66bd487463bcb8e2cb7d77b53ae21445f91c337f7e1b6b4ceeff620ee04&ipo=images" width={'50%'} alt="" />
                        </td>
                        <td>
                            <button>+</button>
                            <input type="text" value={1} readOnly className="form-control w-25" />
                            <button>-</button>
                        </td>
                        <td>63000</td>
                        <td>
                            <button className='btn'>
                                <i className="fa-solid fa-trash" style={{color: "#ff0000",}} />
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="col-4 p-4">
            <div className="border shadow font-bold bg-secondary mt-5 p-3">
                <p className='text-primary fs-3 fw-bold'>Total Products : 1</p>
                <p className='text-primary fs-3 fw-bold'>Total Amount : 63000</p>
            </div>
            <div className="d-grid mt-4">
                <button className="btn btn-dark">Checkout</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Cart