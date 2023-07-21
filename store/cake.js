import { CreateSliceOptions,createSlice } from "@reduxjs/toolkit";

const state1 = {
    noCakes:8
}

const cakeSlice = createSlice(
    {
    name:'cakeSlice',
    initialState:state1,
    reducers:{
        order:(state,action)=>{
            state.noCakes =state.noCakes + 3

        },
        restock :(state,action)=>{
            state.noCakes =state.noCakes - 3

        }
    }


    }
)



export const {order,restock} = cakeSlice.actions
export default cakeSlice.reducer

