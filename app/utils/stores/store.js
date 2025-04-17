import { configureStore } from "@reduxjs/toolkit";
import sideBarSlice from "./sideBarSlice";
import searchQuerySlice from './searchQuerySlice'

const store=configureStore({
   reducer:{
    sideBar:sideBarSlice,
    searchQuery:searchQuerySlice,
   }
   
})



export default store;