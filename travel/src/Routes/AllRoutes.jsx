import React from "react";
import { Route, Routes } from "react-router-dom";
import PlaceCard from "../Components/PlaceCard";
import Hotel from "../Components/Hotels";
import Details from "../Components/Details";
import Home from "../Components/Home";
import About from "../Components/About";
import NavAbout from "../Components/NavAbout";
import PaymentPage from "../Components/payment";
import { Login } from "../Components/Login";
import { Signup } from "../Components/Signup";

const AllRoutes = () => {
    return (

        <Routes>
        <Route path='/' element={<Home/>} />
        <Route exact path='/holidays' element={<PlaceCard/>} />
        <Route exact path='/hotels' element={<Hotel/>} />
        <Route path='/hotels/:id' element={<Details/>} />
        <Route path='/about' element={<NavAbout/>} />
        <Route path='/payment' element={<PaymentPage/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Signup/>} />


        
        
        
      </Routes>
        );
    };

    export default AllRoutes    