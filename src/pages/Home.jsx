import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductsThunk } from '../redux/slices/productSlice'
import { Spinner } from 'react-bootstrap'
import { addToWishlist } from '../redux/slices/wishSlice'
import { addToCart } from '../redux/slices/cartSlice'
import { nextPage, prevPage } from '../redux/slices/productSlice'





function Home() {
    const dispatch = useDispatch()

    const { product, loading, error, productPerPage, currentPage } = useSelector((state) => state.productReducer)

    // Pagination
    const totalPages=product.length/productPerPage
    const lastProductIndex=productPerPage*currentPage
    const firstProductIndex=lastProductIndex-productPerPage
    const visibleProducts=product.slice(firstProductIndex,lastProductIndex)


    useEffect(() => {
        dispatch(fetchProductsThunk())
    }, [])

    // pagination
    const next=()=>{
        if(currentPage<totalPages){
            dispatch(nextPage())
        }           
    }

    const prev=() => {
        if(currentPage>1){
            dispatch(prevPage())
        }
    }

    //console.log(product)
    return (
        <>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="text-center text-white">
                    <h1 className="display-4 text-white fw-bolder">Shop in style</h1>
                    <p className="lead fw-normal text-white-50 mb-0">With this shop hompeage template</p>
                </div>
            </div>
        </header>

        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                {
                loading ?
                    <h2>
                        <Spinner animation='border' role='status'>

                        </Spinner>
                        Loading...
                    </h2>
                    :
                    <>
                        {
                            error ?
                                <h2 className='text-danger'>{error}</h2>
                                :
                                <>
                                {
                                    visibleProducts?.map(item => (
                                        <div className="col mb-5">
                                            <div className="card h-100 shadow bg-body rounded border">
                                                <Link to={`/view/${item.id}`}>
                                                    <img className="card-img-top" src={item?.thumbnail} alt="..." />
                                                </Link>
                                                <div className="card-body p-3">
                                                    <div className="text-center">
                                                        <h5 className="fw-bolder">{item?.title}</h5>
                                                            ${item?.price}
                                                    </div>
                                                </div>
                                                <div className="card-footer d-flex justify-content-between rounded-bottom ">
                                                    <button onClick={()=>dispatch(addToWishlist(item))} className="btn btn-secondary bg-dark shadow">
                                                        <i className="fa-solid fa-heart-circle-plus fa-xl" style={{color: "#ff0000",}} />
                                                    </button>
                                                    <button onClick={()=>dispatch(addToCart(item))} className="btn btn-secondary shadow">
                                                        <i className="fa-solid fa-cart-plus fa-xl" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                    ))
                                }
                                </>
                         }
                    </>
                        }
                </div>
            </div>
        </section>
        
        {/* Pagination */}
        <div className='text-center mb-5'>
            <button onClick={prev} className='btn'>
            <i className="fa-solid fa-2xl fa-circle-chevron-left" />
            </button>
            {' '}
            {currentPage}/{totalPages}
            {' '}
            <button onClick={next} className='btn'>
            <i className="fa-solid fa-2xl fa-circle-chevron-right" />
            </button>
        </div>




        </>
    )
}

export default Home