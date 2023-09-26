import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Grid,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { Link as Rlink } from "react-router-dom";
import Navbar from "./Navbar";
// import useNavigate from 'react-router-dom'



const Hotel = () => {
  const [hotels, setHotels] = useState([]);
  const [lastBookedHotel, setLastBookedHotel] = useState(null);
//   const navigate = useNavigate();


  const handleClick = (hotel) => {
    const lastDataObject = lastBookedHotel;
    const updatedData = {
      hotelName: hotel.name,
      hotelPrice: hotel.room_price,
      hotelImage: hotel.image,
      hotelRating: hotel.rating,
      hotelDays: lastDataObject.days,
      id: lastDataObject.id,
    };
    axios
      .patch(
        "https://webdata.onrender.com/data/" + lastDataObject.id,
        updatedData
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    setTimeout(() => {
      window.location.href = "/hotels/${e.id}";
    }, 3000);
  };

  useEffect(() => {
    axios
      .get("https://webdata.onrender.com/hotels")
      .then((response) => {
        setHotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://webdata.onrender.com/data")
      .then((booking) => {
        setLastBookedHotel(booking.data[booking.data.length - 1]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const calculateDiscount = (price, discount) => {
    const discountedPrice = price - (price * discount) / 100;
    return discountedPrice.toFixed(2);
  };

  const getRandomDiscount = () => {
    const discountPercentage = Math.floor(Math.random() * 31);
    return discountPercentage;
  };

  const renderStarRating = (rating) => {
    const filledStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const starIcons = [];
    for (let i = 0; i < filledStars; i++) {
      starIcons.push(<StarIcon key={i} color='yellow.400' />);
    }

    if (hasHalfStar) {
      starIcons.push(<StarIcon key={filledStars} color='yellow.400' />);
    }

    return (
      <Stack direction='row' spacing='1' align='center' justify='center'>
        {starIcons}
      </Stack>
    );
  };

  return (
    <>
    <Navbar/> 
      <Box >
        <Box bgColor={"#29335c"} h={[120, 120, 160]}></Box>
        <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(4, 1fr)']} gap={10} p={[3, 5]} bg={"#cceaf7"}>
          {hotels.map((hotel) => (
            <Card maxW='md' key={hotel.id} p={2} bg={"white"}>
              <Image
                src={hotel.image}
                alt={hotel.name}
                borderRadius='lg'
                height={['150px', '150px', '200px']}
              />{" "}
              <CardBody>
                <Stack mt='6' spacing='3'>
                  <Heading size={['md', 'lg']}>{hotel.name}</Heading>
                  <Text size={['sm', 'md']}>
                    {hotel.address}{" "}
                    {lastBookedHotel && lastBookedHotel.placeName}
                    {", "}
                    {"India"}
                  </Text>
                  <Stack direction='row' spacing='2'>
                    {hotel.facilities.map((facility, index) => (
                      <Button
                        key={index}
                        size={['xs', 'sm']}
                        colorScheme='blue'
                        variant='outline'
                      >
                        {facility}
                      </Button>
                    ))}
                  </Stack>
                  {/* <Text py='2' textDecoration='line-through'>
                    ₹ {hotel.room_price}
                  </Text> */}
                  {renderStarRating(hotel.rating)}
                  <Text fontSize={['md', '2xl']} color='blue.600' fontWeight='bold'>
                    ₹ {calculateDiscount(hotel.room_price, getRandomDiscount())}{" "}
                    /- per room
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
              <Rlink to={`/hotels/${hotel.id}`} >
              <ButtonGroup spacing='2'>
                  <Button 
                    size={['xs', 'md']}
                    variant='solid'
                    colorScheme='orange'
                    _hover={{
                      backgroundColor: "orange.600",
                    }}
                    // onClick={() => {
                    //   navigate(`/hotels/${e.id}`)
                    // }}
                  >
                    View Details
                  </Button>
                </ButtonGroup>
                 </Rlink>


{/*                
                <Box ml='auto'>
                  <Tag size='md' colorScheme='green'>
                    {getRandomDiscount()}% Off
                  </Tag>
                </Box> */}
              </CardFooter>
            </Card>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Hotel;
