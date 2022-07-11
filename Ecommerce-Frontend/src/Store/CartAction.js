import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// for add to the cart
const addToCart = createAsyncThunk("add/addToCart", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get(`http://apnaplaza.herokuapp:4000/product/${data.id}`);
        response.data.product.quantity=data.quantity;
        return response.data.product;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});
export {addToCart};