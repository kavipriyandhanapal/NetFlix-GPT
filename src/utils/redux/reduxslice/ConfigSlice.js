import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
    name:"config",
    initialState:{
        lanKey:'en'
    },
    reducers:{
        changeLanguage:(state,action)=>{
            state.lanKey=action.payload
        }
    }
})

export const {changeLanguage}=ConfigSlice.actions

export default ConfigSlice.reducer
