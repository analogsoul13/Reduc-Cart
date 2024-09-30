import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromWishlist } from '../redux/slices/wishSlice'

function Wish() {

    const dispatch = useDispatch()

    const { wishlist } = useSelector((state) => state.wishReducer)

    return (
        <>
            <h3 className='mt-4 p-2'>Wishlist</h3>
            <div className="row mt-5 gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">

                {
                    wishlist?.length > 0 ?
                        <>
                            {
                                wishlist?.map(item => (
                                    <div className="col mb-5">
                                        <div className="card h-100">
                                            <Link to={`/view/${item?.id}`}>
                                                <img className="card-img-top" src={item?.thumbnail} alt="..." />
                                            </Link>
                                            <div className="card-body p-4">
                                                <div className="text-center">
                                                    <h5 className="fw-bolder">{item?.title}</h5>
                                                    ${item?.price}
                                                </div>
                                            </div>
                                            <div className="card-footer d-flex justify-content-between rounded-bottom ">
                                                {/* item remove */}
                                                    <button onClick={()=>dispatch(removeFromWishlist(item?.id))} className="btn btn-secondary bg-dark shadow">
                                                    <i className="fa-solid fa-xl fa-heart-circle-xmark" style={{color: "#ff0000",}} />
                                                    </button>
                                                    <button className="btn btn-secondary shadow">
                                                        <i className="fa-solid fa-cart-plus fa-xl" />
                                                    </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                        :
                        <h3 className='text-center text-warning'>No items added yet</h3>
                }

            </div>
        </>
    )
}

export default Wish