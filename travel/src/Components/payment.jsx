import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Card,
  Text,
  Divider,
  HStack,
  VStack,
  Center 
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

// PaymentSummary component (you can define this component separately)
const PaymentSummary = ({
  roomCount,
  totalPrice,
  taxRate,
  taxAmount,
  totalAmount,
  payableAmount,
  dayCount,
}) => {
  return (
    <VStack spacing={4} alignItems="flex-start">
      <Heading as="h2" size="lg">
        Payment Summary
      </Heading>
      <Text>Room Count: {roomCount}</Text>
      <Text>Total Price: ₹{totalPrice}</Text>
      <Text>Day Count: {dayCount}</Text>
      <Text>Tax Rate: {taxRate * 100}%</Text>
      <Text>Tax Amount: ₹{taxAmount}</Text>
      <Text>Total Amount: ₹{totalAmount}</Text>
      <Text>Payable Amount: ₹{payableAmount}</Text>
    </VStack>
  );
};

const PaymentPage = () => {
  const [name, setName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [isSummaryVisible, setIsSummaryVisible] = useState(false);
  const toast = useToast()
  const navigate = useNavigate()

const handlePaymentDone =()=>{
  toast({
    position : "top" ,
    title: 'Payment done',
    description: 'Thanks for booking',
    status: 'success',
    duration: 9000,
    isClosable: true,
  });
  navigate("/")
}
  return (
    <Box >
      <Center>
      <Card variant="unstyled"  bg="inherit"  mt={20} mb={20}>
        <Heading as="h1" size="xl" >
          Payment Information
        </Heading>
        <form>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required = {true}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contact Number</FormLabel>
              <Input
                type="tel"
                placeholder="Enter contact number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                required={true}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required={true}
              />
            </FormControl>
            <Divider />
            <FormControl>
              <FormLabel>Card Number</FormLabel>
              <Input
                type="text"
                placeholder="Enter card number"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
                required={true}
              />
            </FormControl>
            <HStack spacing={4}>
              <FormControl>
                <FormLabel>Expiration Date</FormLabel>
                <Input
                  type="text"
                  placeholder="MM/YY"
                  value={expirationDate}
                  onChange={(e) => setExpirationDate(e.target.value)}
                  required={true}
                />
              </FormControl>
              <FormControl>
                <FormLabel>CVV</FormLabel>
                <Input
                  type="text"
                  placeholder="CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required={true}
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
              onClick={handlePaymentDone }
            >
              Book Now
            </Button>
          </Stack>
        </form>
      </Card>
      </Center>
     

     <Footer/>
   
    </Box>
  );
};

export default PaymentPage;
