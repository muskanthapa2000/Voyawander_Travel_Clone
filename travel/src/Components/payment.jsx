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
  // ... other Chakra UI imports
} from '@chakra-ui/react';

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

  const handlePayment = async () => {
    // Handle payment logic here (mocked for this example)

    // Show the payment summary
    setIsSummaryVisible(true);
  };

  return (
    <Box width="400px" ml={200} >
      <Card variant="unstyled" p="4" bg="inherit">
        <Heading as="h1" size="xl" mb={4}>
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
              />
            </FormControl>
            <FormControl>
              <FormLabel>Contact Number</FormLabel>
              <Input
                type="tel"
                placeholder="Enter contact number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                />
              </FormControl>
              <FormControl>
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
      </Card>

      {/* Payment Summary */}
      {isSummaryVisible && (
        <Box
          p="4"
          mt="4"
          bg="inherit"
          border="1px solid #E2E8F0"
          borderRadius="md"
        >
          <PaymentSummary
            roomCount={1}
            totalPrice={1500}
            taxRate={0.18}
            taxAmount={270}
            totalAmount={1770}
            payableAmount={1770}
            dayCount={3}
          />
        </Box>
      )}
    </Box>
  );
};

export default PaymentPage;
