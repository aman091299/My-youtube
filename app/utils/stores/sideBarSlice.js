import { createSlice } from "@reduxjs/toolkit";


const sideBarSlice=createSlice({
    name:"sideBar",
    initialState:{
        showSideBar:false,
    },
    reducers:{
        toggleSideBar(state){
         state.showSideBar=!state.showSideBar;
        }
    }
})

export const {toggleSideBar}=sideBarSlice.actions;

export default sideBarSlice.reducer;