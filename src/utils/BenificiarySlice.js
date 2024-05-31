import { createSlice } from "@reduxjs/toolkit";


const BenificiarySlice=createSlice({
    name:'benificiary',
    initialState:{
        Benificiary:[]
    },
    reducers:{
        addBenificiary:(state,action)=>{
            state.Benificiary.push(action.payload)
        },
        removeBenificiary:(state,action)=>{
            const benificiaryTobeRemoved= action.payload
            const index= state.Benificiary.findIndex(ben=> ben.fullName === benificiaryTobeRemoved)
            console.log("index",index)
            if(index !== -1){
                state.Benificiary.splice(index,1)
            }
        }
    }

})

export const {addBenificiary,removeBenificiary}=BenificiarySlice.actions

export default BenificiarySlice.reducer;