import { View, Text } from 'react-native'
import React from 'react'
import todo from '../image/todo.png'
import text from '../image/text-todo.png'
import { Image,
        Center

} from 'native-base';

export default function Todo() {
    return <Center>
    <Image source={todo} alt="Alternate Text" size="350" />
    {/* <Image source={text} alt="Alternate Text" height={"38"}  width={"210"}/> */}
  </Center>;
}