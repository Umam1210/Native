import React from 'react'
import icon from '../image/Login Icon.png'
import profile from '../image/profile.jpg'

import { Image,
        Center

} from 'native-base';

export default function LoginIcon() {
    return <Center mt="2">
    <Image source={profile} alt="Alternate Text" size="60" borderRadius="full" />
  </Center>;
}
