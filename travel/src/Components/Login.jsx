import React, { useContext, useState } from 'react'
// import './Style.css';
import { AuthContent } from './ContextApi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Link as ChakraLink,
    Stack,
  } from '@chakra-ui/react';
import Footer from './Footer';


export const Login = () => {

    const navigate = useNavigate();
  const{arr,namelogin,setNamelogin}=useContext(AuthContent);
const[dt,setDt]=useState({
  email:"",
  password:"",

})
console.log(dt.email)
console.log(arr)

const logindata=(e)=>{
e.preventDefault();
    let data1=arr.filter((el)=>{
        console.log(el.email)
       
      return el.email===dt.email&&el.password===dt.password;
    
    })
    // console.log(el.email)
    // console.log(dt.email)
    console.log(data1);
    if(data1.length>=1){
      alert("login Successfully");
      navigate("/")
      let data2=arr.filter((el)=>{
       if(el.email===dt.email&&el.password===dt.password){
        return el.name;
       }
      })
      setNamelogin(data2[0].name);
    

    }
    else{
      alert("Please SignUp First or Fill correct Details");
    }
}

console.log(namelogin)
  
  return (
    <Box p={4}>
    <Box
      ml={{ base: 4, md: 40 }}
      mr={{ base: 4, md: 40 }}
      mt={{ base: 4, md: 40 }}
      mb={{ base: 4, md: 30 }}
      textAlign="center"
    >
      <form onSubmit={logindata}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email or Phone</FormLabel>
            <Input
              type="text"
              placeholder="Enter your email or phone"
              name="email"
              required
              value={dt.email}
              onChange={(e) => setDt({ ...dt, [e.target.name]: e.target.value })}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              name="password"
              required
              value={dt.password}
              onChange={(e) => setDt({ ...dt, [e.target.name]: e.target.value })}
            />
          </FormControl>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4} justify="space-between">
            <Box>
              <ChakraLink as={Link} to="/sign_up" textDecoration="none">
                Not a member? SignUp Now
              </ChakraLink>
            </Box>
            <Box>
              <ChakraLink textDecoration="none">Forgot Password?</ChakraLink>
            </Box>
          </Stack>
          <Button type="submit" colorScheme="teal">
            Login
          </Button>
        </Stack>
      </form>
    </Box>
    <Footer/>
  </Box>
  )
}