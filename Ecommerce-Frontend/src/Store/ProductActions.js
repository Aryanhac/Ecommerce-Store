import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// for getting the all product
const getProducts = createAsyncThunk("gets/getProducts", async (data,{rejectWithValue}) => {
    try {
        let {keyword,currentPage,price,rating,Category}=data;
        if(keyword===undefined){
            keyword="";
        }
        let link=`http://apnaplaza.herokuapp:4000/product?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating[0]}&ratings[lte]=${rating[1]}&price[gte]=${price[0]}&price[lte]=${price[1]}`;
        if(Category){
            link=`http://apnaplaza.herokuapp:4000/product?keyword=${keyword}&page=${currentPage}&ratings[gte]=${rating[0]}&ratings[lte]=${rating[1]}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${Category}`;
        }
        const response = await axios.get(link);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

// for getting the particular product detail
const getProductDetail = createAsyncThunk("gets/getProductDetail", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.get(`http://apnaplaza.herokuapp:4000/product/${id}`);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

//for adding the review 
const addReview = createAsyncThunk("put/putReview", async (data,{rejectWithValue}) => {
    try {
        const confiq={headers:{"Content-Type":"application/json"},withCredentials:true};
        const response = await axios.put(`http://apnaplaza.herokuapp:4000/review`,data,confiq);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

//getting all products --admin
const getAllProducts = createAsyncThunk("gets/getAllProducts", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get(`http://apnaplaza.herokuapp:4000/admin/products`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
// for creating new Product --admin
const newProduct = createAsyncThunk("post/postnewProduct", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"multipart/form-data"},withCredentials:true};
        const response = await axios.post('http://apnaplaza.herokuapp:4000/admin/product/new',data,config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
// for deleting the product --admin
const deleteProduct = createAsyncThunk("delete/deleteProduct", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.delete(`http://apnaplaza.herokuapp:4000/admin/product/${id}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
// for updating Product --admin
const updateProduct = createAsyncThunk("update/updateProduct", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"multipart/form-data"},withCredentials:true};
        const response = await axios.put(`http://apnaplaza.herokuapp:4000/admin/product/${data.id}`,data.form,config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
// for getting all review --admin
const getAllReviews = createAsyncThunk("get/getReviews", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.get(`http://apnaplaza.herokuapp:4000/admin/reviews?product_Id=${id}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});
// for deleting review --admin
const deleteReview = createAsyncThunk("delete/deleteReview", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.delete(`http://apnaplaza.herokuapp:4000/admin/review/delete?product_Id=${data.product_Id}&review_Id=${data.review_Id}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});



export {
    getProducts,
    getProductDetail,
    addReview,
    getAllProducts,
    newProduct,
    deleteProduct,
    updateProduct,
    getAllReviews,
    deleteReview
};