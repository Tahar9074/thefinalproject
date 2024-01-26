import { ERRORS, GET_AUTH_USER, LOGIN_USER, LOGOUT_USER, REGISTER_USER, GET_PRODUCTS } from "./actionTypes"
import axios from "axios"
export const registeUser=(formdata,navigate)=>async(dispatch)=>{
try{
const res=await axios.post("http://localhost:5001/api/auth/register",formdata)
dispatch({type:REGISTER_USER,payload:res.data})
navigate("/Dashboard")
}
catch(err){
    console.log(err)
    console.dir (err)
const {errors,msg}=err.response.data

/*if(Array.isArray(errors)){
    errors.forEach((err)=>alert(err.msg))
}*/
dispatch({
    type:ERRORS,
    payload:errors
})

}

}
export const loginUser=(formdata,navigate)=>async(dispatch)=>{
    try{
    const res=await axios.post("http://localhost:5001/api/auth/login",formdata)
    dispatch({type:LOGIN_USER,payload:res.data})
    navigate("/Dashboard")
    }
    catch(err){
        console.log(err)
        console.dir (err)
    const {errors,msg}=err.response.data
    
    /*if(Array.isArray(errors)){
        errors.forEach((err)=>alert(err.msg))
    }*/
    dispatch({
        type:ERRORS,
        payload:errors
    })

    }
    
    }


// get auth user
export const getAuthUser=()=>async(dispatch)=>{
try {
const config={
    headers: {
        'x-auth': localStorage.getItem('token'),
      }

}

const res=await axios.get("http://localhost:5001/api/auth/user",config)
dispatch({
    type:GET_AUTH_USER,
    payload:res.data
})
}
catch(err){
    console.log(err)
}
}

export const logoutUser=()=>(dispatch)=>{

dispatch({
    type:LOGOUT_USER
})
}
//product actions

export const getProducts=()=>(dispatch)=>{
    axios.get("http://localhost:5001/api/products/getall")
    .then((res)=>dispatch({type:GET_PRODUCTS,payload:res.data}))
    .catch((err)=>console.log(err))
    }

    export const deleteProduct=(idProduct)=>(dispatch)=>{
        axios.delete("http://localhost:5001/api/products/delete/${idProduct")
        .then((res)=>dispatch(getProducts()))
        .catch((err)=>console.log(err))
    }

    export const addProduct=(newproduct)=>(dispatch)=>{
        axios.post("http://localhost:5001/api/products/add",newproduct)
        .then((res)=>dispatch(getProducts()))
        .catch((err)=>console.log(err))
    }

    export const editProduct=(idProduct,editedproduct)=>(dispatch)=>{
        axios.put("http://localhost:4001/api/products/edit/${idProduct}",editedproduct)
        .then((res)=>dispatch(getProducts()))
        .catch((err)=>console.log(err))
    }