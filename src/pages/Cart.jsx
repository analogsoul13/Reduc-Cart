import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import { removeFromCart,increase,decrease } from '../redux/slices/cartSlice'

function Cart() {

    const dispatch=useDispatch()
    const {cart}=useSelector((state)=>state.cartReducer)

    return (
        <>
            <div className="row p-2">
                <div className="col-8">
                    <h3>Cart Summary</h3>
                    {
                        cart?.length > 0 ?
                            <Table table bordered className='shadow'>
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
                                    {
                                        cart?.map(item => (
                                            <tr>
                                                <td>{item?.id}</td>
                                                <td>{item?.title}</td>
                                                <td>
                                                    <img src={item?.thumbnail} width={'50%'} />
                                                </td>
                                                <td className='d-flex justify-content-between align-items-center'>
                                                    <button onClick={()=>dispatch(increase(item?.id))} className='btn btn-primary'>+</button>
                                                    <input type="text" value={item?.quantity} readOnly className="form-control text-dark w-25" />
                                                    <button onClick={()=>dispatch(decrease(item?.id))} className='btn btn-dark'>-</button>
                                                </td>
                                                <td>${item?.price}</td>
                                                <td>
                                                    <button onClick={()=>dispatch(removeFromCart(item?.id))} className='btn'>
                                                        <i className="fa-solid fa-trash" style={{ color: "#ff0000", }} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </Table>

                            :
                            <h3 className='text-danger text-center'>No cart items yet</h3>

                    }

                </div>

                <div className="col-4 p-4">
                    <div className="border shadow font-bold bg-secondary mt-5 p-3">
                        <p className='text-primary fs-3 fw-bold'>Total Products : {cart.length}</p>
                        <p className='text-primary fs-3 fw-bold'>Total Amount : ${
                        cart?.reduce((prev,item)=>prev+(item.price*item.quantity),0)}
                        </p>
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