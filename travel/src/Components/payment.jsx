// PaymentPage.js
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Text,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  HStack,
  VStack,
  Divider,
} from '@chakra-ui/react';

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handlePayment = async () => {
    // Handle payment logic here (mocked for this example)

    // Open the drawer to display payment details
    setIsDrawerOpen(true);
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <Box p={8} bg="gray.100" minH="100vh">
      <Heading as="h1" size="xl" mb={4}>
        Payment Information
      </Heading>
      <form>
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Contact Number</FormLabel>
            <Input
              type="tel"
              placeholder="Enter contact number"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Divider />
          <FormControl isRequired>
            <FormLabel>Card Number</FormLabel>
            <Input
              type="text"
              placeholder="Enter card number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            />
          </FormControl>
          <HStack spacing={4}>
            <FormControl isRequired>
              <FormLabel>Expiration Date</FormLabel>
              <Input
                type="text"
                placeholder="MM/YY"
                value={expirationDate}
                onChange={(e) => setExpirationDate(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>CVV</FormLabel>
              <Input
                type="text"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
              />
            </FormControl>
          </HStack>
          <Button
            type="button"
            variant="solid"
            colorScheme="orange"
            _hover={{
              backgroundColor: 'orange.600',
            }}
            onClick={handlePayment}
          >
            Book Now
          </Button>
        </Stack>
      </form>

      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={closeDrawer}
        size="md"
      >
        <DrawerOverlay />
        <DrawerContent bg="white" borderRadius="8px">
          <DrawerCloseButton />
          <DrawerHeader>Your Booking Details</DrawerHeader>
          <DrawerBody>
            <VStack align="start" spacing={4} p={4}>
              <Text fontSize="lg" fontWeight="bold">
                Personal Information:
              </Text>
              <Text>Name: {name}</Text>
              <Text>Contact Number: {contactNumber}</Text>
              <Text>Email: {email}</Text>
              <Divider />
              <Text fontSize="lg" fontWeight="bold">
                Card Details:
              </Text>
              <Text>Card Number: {cardNumber}</Text>
              <Text>Expiration Date: {expirationDate}</Text>
              <Text>CVV: {cvv}</Text>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default PaymentPage;
