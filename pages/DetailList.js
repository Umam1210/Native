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
  View,
} from "native-base";
import Todo from "../components/Todo";
import LoginIcon from "../components/LoginIcon";
import { Fontisto } from "@expo/vector-icons";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export default function ListTodo() {
  return (
    <NativeBaseProvider>
      <Center ml="10" mr="10" mt="10">
        <VStack space={2} alignItems="" w="100%">
          <View bg="primary.200" borderRadius="10" p="2">
            <Flex direction="row">
              <Text marginRight="140" mt="2">
                Study - Golang
              </Text>
              <Button>Study</Button>
            </Flex>
            <Button
              variant="danger"
              bg="muted.400"
              mt="1.5"
              marginLeft="240"
              borderRadius="100%"
              size="50"
            >
              {" "}
            </Button>
            <Text mb="3">
              React Native adalah salah satu topik hangat di bidang mobile
              development selama beberapa tahun terakhir. Salah satu alasan
              mengapa React Native sangat populer karena menawarkan cara untuk
              mengembangkan mobile app atau aplikasi selular dengan mudah.
              Membuat sebuah aplikasi selular bukanlah hal mudah karena
              membutuhkan coding khusus yang pengembangannya memerlukan waktu
              lama. Namun, React Native berhasil membawa perubahan. Bahkan,
              framework itu dapat membantu pengembang untuk membuat aplikasi
              Android dan iOS dengan lebih cepat dan mudah. Tertarik mengetahui
              soal React Native lebih dalam? Simak dahulu rangkuman yang sudah
              Glints persiapkan di bawah ini.
            </Text>
          </View>
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
}
