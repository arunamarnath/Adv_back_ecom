import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
            console.log(action.payload)
           
        }
    },
});



export const {addItem} = cartSlice.actions;//named export(no limit)
export default cartSlice.reducer // default export only one 