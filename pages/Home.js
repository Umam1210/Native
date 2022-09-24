import React from "react";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Stack,
  Box,
  Image,
  Button
} from "native-base";
import Todo from "../components/Todo";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function Home() {
  return (
    <NativeBaseProvider>
      {/* <ToggleDarkMode /> */}
      <Center
        _dark={{ bg: "blueGray.900" }}
        _light={{ bg: "blueGray.50" }}
        px={4}
        flex={1}
      >
        <VStack space={2} alignItems="center">
          <Todo />
            <HStack alignItems="center" mt="5">
              <Text>Write your activity and finish your activity.</Text>
            </HStack>
            <HStack alignItems="center">
              <Text>Fast, Simple and Easy to Use</Text>
            </HStack>
            <Button mt="1/5" variant="danger" bg="error.600" w="80%">
              <Text bold color="white">Login</Text>
            </Button>
            <Button my="1" mx="10" variant="muted" bg="muted.500" w="80%" >
              <Text bold color="white">Register</Text>
            </Button>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
