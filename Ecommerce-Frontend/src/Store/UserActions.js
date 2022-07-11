import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// for logIn the user
const loggedIn = createAsyncThunk("post/postuserDetail", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"application/json"},withCredentials:true};
        const response = await axios.post('http://localhost:4000/logIn',data,config);
        return response.data;
    }catch(error) {
        return rejectWithValue(error.response.data.message);
    }
});
// for Registering the user
const register = createAsyncThunk("post/postuserRegisterDetail", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"multipart/form-data"},withCredentials:true};
        const response = await axios.post('http://localhost:4000/register',data,config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
// getting user after loading the page 
const loadUser = createAsyncThunk("get/getuserDetail", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get('http://localhost:4000/profile',{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
//LogOut
const logOutUser= createAsyncThunk("get/getLogOut", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get('http://localhost:4000/logOut',{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
//for updating Profile
const updateProfile = createAsyncThunk("update/updateProfile", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"multipart/form-data"},withCredentials:true};
        const response = await axios.put('http://localhost:4000/profile/update',data,config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
//for updating Password
const updatePassword = createAsyncThunk("update/updatePassword", async (data,{rejectWithValue}) => {
    try {
        const config={headers:{"Content-Type":"application/json"},withCredentials:true};
        const response = await axios.put('http://localhost:4000/profile/updatePassword',data,config);
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
// getAllUsers ---admin
const getAllUsers= createAsyncThunk("get/getAllUsers", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.get('http://localhost:4000/admin/users',{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
// getUserDetail ---admin
const getUserDetail= createAsyncThunk("get/getUserDetail", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.get(`http://localhost:4000/admin/user/${id}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});

// deleteUser ---admin
const deleteUser= createAsyncThunk("delete/deleteUser", async (id,{rejectWithValue}) => {
    try {
        const response = await axios.delete(`http://localhost:4000/admin/user/${id}`,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});
//  update ---admin
const updateUser= createAsyncThunk("update/updateUser", async (data,{rejectWithValue}) => {
    try {
        const response = await axios.put(`http://localhost:4000/admin/user/${data.id}`,data.form,{withCredentials:true});
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data.message);
    }
});


export {loggedIn,register,loadUser,logOutUser,updateProfile,updatePassword,getAllUsers,deleteUser,updateUser,getUserDetail};