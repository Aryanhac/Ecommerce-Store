import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// for new Order
const createNewOrder = createAsyncThunk("add/newOrder", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{'Content-Type':'application/json'},withCredentials:true};
        const response = await axios.post('https://apnaplaza.herokuapp.com:4000/newOrder',data,config);
        return response.data.order;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});
// for getting All Orders
const getAllOrders = createAsyncThunk("get/getAllOrders", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get('https://apnaplaza.herokuapp.com:4000/orders/me',{withCredentials:true});
        return response.data.order;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});
//for getting particular order --admin
const getOrder = createAsyncThunk("get/getOrder", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.get(`https://apnaplaza.herokuapp.com:4000/order/me/${id}`,{withCredentials:true});
        return response.data.order;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});

//for getting all Orders --admin
const getOrdersList = createAsyncThunk("get/getOrdersList", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get('https://apnaplaza.herokuapp.com:4000/getAllOrders',{withCredentials:true});
        return response.data;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});

// for deleting the Order --admin
const deleteOrder= createAsyncThunk("delete/deleteOrder", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.delete(`https://apnaplaza.herokuapp.com:4000/deleteOrder/${id}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
// for updating OrderStatus --admin
const updateOrder = createAsyncThunk("update/updateOrder", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"application/json"},withCredentials:true};
        const response = await axios.put(`https://apnaplaza.herokuapp.com:4000/updateOrderStatus/${data.id}`,data.value,config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

export {createNewOrder,getAllOrders,getOrder,getOrdersList,deleteOrder,updateOrder};