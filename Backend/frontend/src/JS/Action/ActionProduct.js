import axios from 'axios'
import { ADD_PRODUCT, DELETE_PRODUCT, FAIL_PRODUCT, GET_BY_ID, GET_PRODUCT, LOAD_PRODUCT,} from "../ActionType/ActionType"
//add the product
export const add_product=(newProduct)=> async(dispatch)=>   
{   dispatch({type:LOAD_PRODUCT}) // appel load

    try {
        let  result =await axios.post("/api/product/add_product",newProduct) 
        dispatch({type:ADD_PRODUCT,payload:result.data})
    } catch (error) {
            dispatch({type:FAIL_PRODUCT,payload:error})
    }

}

export const get_product=()=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT})
    try {
        let result=await axios.get("/api/product/get_product")
        dispatch({type:GET_PRODUCT,payload:result.data})
    } catch (error) {
        dispatch({type:FAIL_PRODUCT,payload:error})
    }
}

export const get_byId=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT})
    try { 
        let result=await axios.get(`/api/product/get_byId/${id}`)
        dispatch({type:GET_BY_ID,payload:result.data})

    } catch (error) {
        dispatch({type:FAIL_PRODUCT,payload:error})

    }
}

export const deleteproduct=(id)=>async(dispatch)=>{
    dispatch({type:LOAD_PRODUCT})
    try {
        await axios.delete(`/api/product/deleteproduct/${id}`)
        dispatch({type:DELETE_PRODUCT})

    } catch (error) {
        dispatch({type:FAIL_PRODUCT,payload:error})

    }
}
