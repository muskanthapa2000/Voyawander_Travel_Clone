import React from "react";
import "../Styles/Home.modulo.css"
import { Button, Heading } from "@chakra-ui/react";
import { GiCommercialAirplane } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { CiPercent } from "react-icons/ci";
import About from "./About";
import HomeHotels from "./HomeHotels";
import Flights from "./Flights";
import Holidays from "./Holidays";



const Home = () => {
  return (
    <div id='home' style ={{display : "grid" , padding : "20px"}}>
      <div className='resp'>
        <div id='imgSection'>
          <div class='box1'>
            <img
              id='main'
              src='https://www.sciencesetavenir.fr/assets/img/2021/12/23/cover-r4x3w1200-61c45f4b25fea-049-f0342710.jpg'
              alt='img1'
            />
          </div>
          <div class='box2'>
            <img
              id='main'
              src='https://www.angsana.com/_next/image?url=https%3A%2F%2Fwww.angsana.com%2Fassets%2F2021-11%2Fdeluxe-in-ocean-villa-4.jpg&w=2048&q=75'
              alt='img2'
            />
          </div>
        </div>
        <div className='container'>
          <div id='textSection'>
            <Heading id='heading'>Explore the beauty of Journey</Heading>
            <span id='span'>
              Join our community of travel enthusiasts and discover new places.
              meet new people, and make lasting memories. Book with us and
              experience the world like never before.
            </span>
          </div>
          <Button id='btn'>Learn More</Button>
        </div>
      </div>
      <About/>
      <HomeHotels/>
      <Flights/>
      <Holidays/>
    </div>

    
  );
};

export default Home;