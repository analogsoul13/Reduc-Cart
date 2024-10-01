import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify"

const cartSlice=createSlice({
    name:'cart',
    initialState:{
        cart:[]
    },
    reducers:{
        addToCart(state,action){
            const existing=state.cart.find(item=>item.id==action.payload.id)
            console.log(existing);
            
            if(existing){
                existing.quantity+=1
            }
            else{
                let prod=action.payload
                prod={...prod,quantity:1}
                state.cart.push(prod)
            }
            toast.success("Product Added to Cart")
        },
        removeFromCart(state,action){
            state.cart=state.cart.filter(item=>item.id!=action.payload)
            toast.warning("Product Removed From Cart")
        },
        increase(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            existing.quantity++
        },
        decrease(state,action){
            const existing=state.cart.find(item=>item.id==action.payload)
            if(existing.quantity==1){
                state.cart=state.cart.filter(item=>item.id!=action.payload)
                toast.warning("Product Removed From Cart")
            }
            existing.quantity--
        },
        checkout(state){
            state.cart=[]
        }
    }
})

export default cartSlice.reducer
export const {addToCart,removeFromCart,increase,decrease,checkout}=cartSlice.actions
