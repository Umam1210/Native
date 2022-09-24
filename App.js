import React from "react";
import {
  Text,
  HStack,
  Switch,
  useColorMode,
  extendTheme,
} from "native-base";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddList from "./pages/AddList";
import AddCategory from "./pages/AddCategory";
import ListTodo from "./pages/ListTodo";
import DetailList from "./pages/DetailList";
import NavbarFooter from "./components/NavbarFooter";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export default function App() {
  return (<>
   {/* <Home /> */}
   {/* <Login /> */}
   {/* <Register /> */}
   {/* <AddList /> */}
   {/* <AddCategory /> */}
   <ListTodo />
   {/* <DetailList /> */}
   {/* <NavbarFooter /> */}
  </>
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
