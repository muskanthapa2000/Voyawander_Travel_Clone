import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Card as ChakraCard,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
  Grid,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  Icon,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Spinner,Spacer , Link ,  MenuMenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { debounce } from "lodash";
import { FaSearch } from "react-icons/fa";

const ModalWithSpinner = ({ isOpen, onClose }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        {/* <ModalHeader>Loading...</ModalHeader> */}
        <ModalBody
          display='flex'
          justifyContent='center'
          alignItems='center'
          bg={"#3199da"}
        >
          {/* {showSpinner && <Spinner size='xl' />} */}
          <img
            src='https://i.pinimg.com/originals/eb/70/7a/eb707ae7096cc8df384f1bf87dab547a.gif'
            alt=''
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

const PlaceCard = () => {
  const [places, setPlaces] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    axios
      .get("https://webdata.onrender.com/places")
      .then((response) => {
        setPlaces(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = debounce((value) => {
    setSearchTerm(value);
  }, 100);

  const filteredPlaces = places.filter((place) =>
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  async function handleDelete(newData) {
    const url = "https://webdata.onrender.com/data/1";
    try {
      const response = await axios.delete(url);
      console.log("Data deleted successfully:", response.data);
    } catch (error) {
      console.error("Error deleting data:", error.response.data);
    }

    try {
      await axios.post("https://webdata.onrender.com/data", newData);
      console.log("Data stored successfully");
    } catch (error) {
      console.error("Error storing data:", error);
    }
  }

  const handleClick = async (place) => {
    const newData = {
      placeName: place.name,
      placePrice: place.price,
      placeImage: place.image,
      days: place.days,
      id: 1,
    };

    setIsModalOpen(true); // Open the modal

    try {
      const response = await axios.get(
        "https://webdata.onrender.com/data"
      );
      setData(response.data.length);
      console.log(data);
    } catch (error) {
      console.error("Error storing data:", error);
    }

    if (data !== null) {
      handleDelete(newData);
    }

    try {
      await axios.post("https://webdata.onrender.com/data", newData);
      console.log("Data stored successfully");
    } catch (error) {
      console.error("Error storing data:", error);
    }

    setTimeout(() => {
      setIsModalOpen(false); // Close the modal after 5 seconds
      window.location.href = "/hotels";
    }, 2000);
  };

  return (


    
    <Box bgColor={"#cceaf7"} marginTop={8}>

{/* 

<Box position="relative" maxWidth="1000px"  margin="0 auto">
      <Image
        src="https://as2.ftcdn.net/v2/jpg/01/74/67/91/1000_F_174679133_JSQwNCDHSTdwo1geidRrSRNorwU4TICc.jpg"
        alt="Your Image"
        width="500%" 
        height="30%" 
      />

      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        backgroundColor="white"
        padding="10px"
        boxShadow="0px -2px 5px rgba(0, 0, 0, 0.1)"
      >
        <form>
          <Input
            type="text"
            placeholder="Search..."
            width="70%"
            padding="5px"
            border="1px solid #ccc"
            borderRadius="5px"
          />
          <Button
            type="submit"
            backgroundColor="#007bff"
            color="white"
            border="none"
            padding="5px 10px"
            borderRadius="5px"
            cursor="pointer"
          >
            Search
          </Button>
        </form>
      </Box>
    </Box> */}



  
      <Heading
        pt={100}
        fontWeight={600}
        fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
        textAlign="center"
        mb={6}
        color="black"
      >
        <Text as={"span"} color={"black"}>
          Search your Destination
        </Text>
      </Heading>
      
      <Flex justifyContent="center" >
      <InputGroup w={["80%", "80%", "50%"]} size="lg">
          <InputLeftElement
            pointerEvents='none'
            children={<Icon as={FaSearch} color='gray.500' />}
          />  
          <Input
            type='text'
            placeholder='Search by place name'
            onChange={(e) => handleSearch(e.target.value)}
            value={searchTerm}
          />
        </InputGroup>
      </Flex>
      <Grid templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"]} gap={6} p={5}>
        {filteredPlaces.map((place) => (
          <ChakraCard key={place.id} maxW='md' p={2} bg={"white"} 
          // _hover={{
            // transform: "scale(1.04)", 
            // transition: "transform 0.3s ease-in-out", 
          // }}
          >
            <CardBody>
            {/* <Heading size='lg'>{place.desc}</Heading> */}
              <Image src={place.image} alt={place.name} borderRadius='lg'  height={['150px', '150px', '200px']} />
              <Stack mt='6' spacing='3'>
                <Heading size='lg'>{place.name}</Heading>
                <Text color='blue.600' fontSize='1xl'>
                 {place.price}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing='40'>
                <Button
                  variant='solid'
                  colorScheme='orange'
                  _hover={{
                    backgroundColor: "orange.600", // Change background color on hover
                  }}
                  onClick={() => {
                    handleClick(place);
                  }}
                >
                  Book Now
                </Button>

                {/* <Button
                  variant='solid'
                  colorScheme='orange'
                >
                  More Details
                </Button> */}
              </ButtonGroup>
              <Text color='blue.600' fontSize='2xl' pl={10}>
                {/* Days: {place.days} */}
              </Text>
            </CardFooter>
          </ChakraCard>
        ))}
      </Grid>
      <ModalWithSpinner
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Box>
  );
};

export default PlaceCard;
