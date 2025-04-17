import { createSlice } from "@reduxjs/toolkit";


const searchQuerySlice=createSlice({
    name:"searchQuery",
    initialState:{
        query:'',
    },
    reducers:{
         settingSearchQuery(state,action){
              state.query=action.payload;
         },
    }
})


export const {settingSearchQuery}=searchQuerySlice.actions;

export default  searchQuerySlice.reducer;