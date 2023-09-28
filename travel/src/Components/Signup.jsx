import React, { useContext, useState } from 'react';
import { AuthContent } from './ContextApi';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Box, Button, FormControl, FormLabel, Input, Radio, RadioGroup, Stack } from '@chakra-ui/react';
import Footer from './Footer';

const SignUp = () => {
  const { arr, setArr, setCheck } = useContext(AuthContent);
  const [log, setLog] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();

  const saveData = (e) => {
    e.preventDefault();
    let logData = arr.filter((el) => {
      return el.email === log.email || el.phone === log.phone;
    });
    if (logData.length >= 1) {
      alert("Already registered");
    } else {
      setArr([...arr, log]);
      alert("Successfully registered");
      setCheck(true);
      navigate("/login");
    }
  };

  return (
    <Box p={4}>
      <Box
        ml={{ base: 4, md: 40 }}
        mr={{ base: 4, md: 40 }}
        mt={{ base: 4, md: 40 }}
        mb={{ base: 4, md: 30 }}
      >
        <form onSubmit={saveData}>
          <Stack spacing={4}>
            <FormControl id="name">
              <FormLabel>Full Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your name"
                name="name"
                value={log.name}
                onChange={(e) => setLog({ ...log, [e.target.name]: e.target.value })}
                required
              />
            </FormControl>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="text"
                placeholder="Enter your email"
                name="email"
                value={log.email}
                onChange={(e) => setLog({ ...log, [e.target.name]: e.target.value })}
                required
              />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone Number</FormLabel>
              <Input
                type="text"
                placeholder="Enter your number"
                name="phone"
                value={log.phone}
                onChange={(e) => setLog({ ...log, [e.target.name]: e.target.value })}
                required
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                name="password"
                value={log.password}
                onChange={(e) => setLog({ ...log, [e.target.name]: e.target.value })}
                required
              />
            </FormControl>
            <FormControl as="fieldset">
              <FormLabel as="legend">Gender</FormLabel>
              <RadioGroup name="gender">
                <Stack direction="row">
                  <Radio id="dot-1" value="male">
                    Male
                  </Radio>
                  <Radio id="dot-2" value="female">
                    Female
                  </Radio>
                  <Radio id="dot-3" value="transgender">
                    Trans-gender
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
            <Button type="submit" colorScheme="teal">
              Register
            </Button>
          </Stack>
        </form>
        <Box mt={4}>
          Already a member? <Link to={"/login"}>Login</Link>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default SignUp;
