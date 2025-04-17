import { createSlice } from "@reduxjs/toolkit";


const searchQuerySlice=createSlice({
    name:"searchQuery",
    initialState:{
        query:'',
        chacheSuggestion:{

        },
    },
    reducers:{
         settingSearchQuery(state,action){
              state.query=action.payload;
         },
         chacheResult(state,action){
             state.chacheSuggestion={...state.chacheSuggestion,...action.payload}
         },
    }
})


export const {settingSearchQuery,chacheResult}=searchQuerySlice.actions;

export default  searchQuerySlice.reducer;