import React from "react";
import { Route, Routes } from "react-router-dom";
import PlaceCard from "../Components/PlaceCard";
import Hotel from "../Components/Hotels";
import Details from "../Components/Details";
import Home from "../Components/Home";


const AllRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<Home/>} />
        <Route exact path='/holidays' element={<PlaceCard/>} />
        <Route exact path='/hotels' element={<Hotel/>} />
        <Route path='/hotels/:id' element={<Details/>} />
        
        
      </Routes>
        );
    };

    export default AllRoutes    