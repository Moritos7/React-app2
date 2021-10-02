import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    auth:false,
    user:{
        email:'',
        password:'',
        firstName:'',
        lastName:'',
        age:18,
        gender:''
        
    }
}


export const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        changeAuth:(state,action)=>{
            state.auth=action.payload
        }, 

        signIn:(state,action)=>{
            state.user={...state.user, ...action.payload}
            state.auth=true
        }

    }
})

export const { changeAuth, signIn } = postSlice.actions
export default postSlice.reducer
