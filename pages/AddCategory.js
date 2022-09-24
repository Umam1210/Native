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
  TextArea
} from "native-base";
import Todo from "../components/Todo";
import LoginIcon from "../components/LoginIcon";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function AddCategory() {
  return (
    <NativeBaseProvider >
      <Center ml="10" mr="10">
        <VStack space={2} alignItems="" w="100%">
          <HStack alignItems="start" mt="5">
            <Text fontSize="3xl" bold my="5">
              Add Category
            </Text>
          </HStack>
          <FormControl my="3">
            <Input
              type="text"
              placeholder="Name"
              bold
              bg="muted.200"
              size="md"
            />
          </FormControl>
          <Button variant="danger" bg="error.600" w="100%" mt="" color="white">
            <Text bold color="white">
              Add List
            </Text>
          </Button>
          <Text fontSize="2xl" bold my="5">
              List Category
        </Text>
        <Text>
        <Button variant="danger" bg="primary.300" color="white" mr="2" borderRadius="10">Study</Button>
        <Button variant="danger" bg="error.400" color="white" mr="2" borderRadius="10">Home Work</Button>
        <Button variant="danger" bg="warning.400" color="white" borderRadius="10">Workout</Button>
        </Text>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
