import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  NativeBaseProvider,
  VStack,
  FormControl,
  Button,
  Input,
  Select,
  Box,
  TextArea,
  Flex,
  View
} from "native-base";
import Todo from "../components/Todo";
import LoginIcon from "../components/LoginIcon";
import { Fontisto } from '@expo/vector-icons';
import NavbarFooter from "../components/NavbarFooter";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function ListTodo() {
  return (
    <>
    <NativeBaseProvider >
      <Center ml="10" mr="10">
        <VStack space={2} alignItems="" w="100%">
          <HStack alignItems="start" mt="5">    
            <Text fontSize="3xl" bold my="5">
              Hi Khairul 
            </Text>
            <Flex w="65%" alignItems="end">
            <LoginIcon />
            </Flex>
              </HStack>
            
          <FormControl my="3">
            <Input
              type="text"
              placeholder="Search"
              bold
              bg="muted.200"
              size="md"
            />
          </FormControl>

          <Flex direction="row" w="100%">
            <Input
              type="text"
              placeholder="Choose Date"
              bold
              bg="muted.200"
              w="33%"
            />
            <Button variant="danger" bg="muted.200" w="32%" mx="2"> Category  </Button>
            <Button variant="danger" bg="muted.200" w="30%"> Status  </Button>
            </Flex>

        <View bg="primary.200" borderRadius="10" p="2">
            <Flex direction="row">
        <Text marginRight="140" mt="2">
        Study - Golang
        </Text>
        <Button>Study</Button>
            </Flex >
            <Text mb="3">
            Learn Golang to improve fundamentals and familiarize with coding.
            </Text>
            <Flex direction="row">
            <Fontisto name="date" size={20} color="black"  /> <Text>  20 Juli 2020</Text>
            {/* <View mb="100"></View> */}
            <Button variant="danger" bg="muted.400" marginLeft="130" borderRadius="100%" size="50">   </Button>
            </Flex>
        </View>
        <View bg="primary.200" borderRadius="10" p="2">
            <Flex direction="row">
        <Text marginRight="140" mt="2">
        Study - Golang
        </Text>
        <Button>Study</Button>
            </Flex >
            <Text mb="3">
            Learn Golang to improve fundamentals and familiarize with coding.
            </Text>
            <Flex direction="row">
            <Fontisto name="date" size={20} color="black"  /> <Text>  20 Juli 2020</Text>
            {/* <View mb="100"></View> */}
            <Button variant="danger" bg="muted.400" marginLeft="130" borderRadius="100%" size="50">   </Button>
            </Flex>
        </View>
        
        <View bg="primary.200" borderRadius="10" p="2">
            <Flex direction="row">
        <Text marginRight="140" mt="2">
        Study - Golang
        </Text>
        <Button>Study</Button>
            </Flex >
            <Text mb="3">
            Learn Golang to improve fundamentals and familiarize with coding.
            </Text>
            <Flex direction="row">
            <Fontisto name="date" size={20} color="black"  /> <Text>  20 Juli 2020</Text>
            {/* <View mb="100"></View> */}
            <Button variant="danger" bg="muted.400" marginLeft="130" borderRadius="100%" size="50">   </Button>
            </Flex>
        </View>
        
        <View bg="primary.200" borderRadius="10" p="2">
            <Flex direction="row">
        <Text marginRight="140" mt="2">
        Study - Golang
        </Text>
        <Button>Study</Button>
            </Flex >
            <Text mb="3">
            Learn Golang to improve fundamentals and familiarize with coding.
            </Text>
            <Flex direction="row">
            <Fontisto name="date" size={20} color="black"  /> <Text>  20 Juli 2020</Text>
            {/* <View mb="100"></View> */}
            <Button variant="danger" bg="muted.400" marginLeft="130" borderRadius="100%" size="50">   </Button>
            </Flex>
        </View> 
        </VStack>
      </Center>
    </NativeBaseProvider>
      <NavbarFooter />
      </>
  );
}
