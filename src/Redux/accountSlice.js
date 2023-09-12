import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    accounts:[]
}
const accountSlice=createSlice({
    name:'accounts',
    initialState,
    reducers:{
        storeAccount:(state,action)=>{
            state.accounts = action.payload
        },
        addAccount:(state,action)=>{
            console.log(action.payload,'---------acc')
            state.accounts.push(action.payload)
        },
    }
})

export const {storeAccount,addAccount} =accountSlice.actions;
export default accountSlice.reducer;
