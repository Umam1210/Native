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

export default function AddList() {
  return (
    <>
    <NativeBaseProvider >
      <Center ml="10" mr="10">
        <VStack space={2} alignItems="" w="100%">
          <HStack alignItems="start" mt="5">
            <Text fontSize="3xl" bold my="5">
              Add List
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
          <FormControl w="100%" bg="muted.200">
            <Select minWidth="200" placeholder="Category" mt="1">
              <Select.Item label="UX Research" value="ux" />
              <Select.Item label="Web Development" value="web" />
              <Select.Item label="Cross Platform Development" value="cross" />
              <Select.Item label="UI Designing" value="ui" />
              <Select.Item label="Backend Development" value="backend" />
            </Select>
          </FormControl>
          <FormControl my="3">
            <Input
              type="date"
              placeholder="Date"
              bold
              bg="muted.200"
              size="md"
            />
          </FormControl>
          <FormControl >
            <TextArea
              h="110"
              placeholder="Description"
              w="100%"
              bg="muted.200"
              />
          </FormControl>
          <Button variant="danger" bg="error.600" w="100%" mt="10">
            <Text bold color="white">
              Add List
            </Text>
          </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
    </>
  );
}
