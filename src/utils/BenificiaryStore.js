import { configureStore } from "@reduxjs/toolkit";
import BenificiarySlice from "./BenificiarySlice";


const beneficiaryStore= configureStore({
    reducer:{
        Benificiary:BenificiarySlice
    }
})

export default beneficiaryStore;