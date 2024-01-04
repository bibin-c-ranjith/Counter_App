import { createSlice } from "@reduxjs/toolkit";


const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
         //actions are created inside this reducers key as object
    reducers:{
        //fuction to update state

        //fuction to increment number
        increment:(state)=>{
            state.value +=1
        },
        //function to decrement number
        decrement:(state)=>{
            state.value -=1
        },
        //function to reset number
        reset:(state)=>{
            state.value = 0
        }

    }
})

//action is required by the component inorder to update state
export const{increment,decrement,reset} = counterSlice.actions

//reducer is required to store to change the state value
export default counterSlice.reducer