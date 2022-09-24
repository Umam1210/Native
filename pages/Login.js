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
    Input
} from "native-base";
import Todo from "../components/Todo";
import LoginIcon from "../components/LoginIcon";

// Define the config
const config = {
    useSystemColorMode: false,
    initialColorMode: "dark",
};



export default function Login() {
    return (
        <NativeBaseProvider>
            <Center
                _dark={{ bg: "blueGray.900" }}
                _light={{ bg: "blueGray.50" }}
                px={4}
                flex={1}
            >
                <VStack space={2} alignItems="">
                    <LoginIcon />
                    <HStack alignItems="start" mt="5">
                        <Text fontSize="3xl" bold>Login</Text>
                    </HStack>
                    <FormControl my="3">
                        <Input type="email"
                            placeholder="Email"
                            bold
                            bg="muted.200"
                            size="md"
                        />
                    </FormControl>
                    <FormControl >

                        <Input type="password"
                            placeholder="password"
                            bold
                            bg="muted.200"
                            size="md"
                        />
                    </FormControl>
                    <Button variant="danger" bg="error.600" w="100%" mt="10">
                        <Text bold color="white">Login</Text>
                    </Button>

                    <Center>
                    <Text>
                        New Users ?
                        <Link ml="2" >
                            <Text color="error.600" bold>
                                Register
                            </Text>
                        </Link>
                    </Text>
                    </Center>
                 

                </VStack>
            </Center>
        </NativeBaseProvider>
    );
}
