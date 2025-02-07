import React from "react";
import NavigationWrapper from "../components/NavigationWrapper/NavigationWrapper";
import Logo from "../components/Logo/Logo";
import Tabs from "./tabs";
import ThemeIcon from "../components/ThemeIcon/ThemeIcon";

export default function Navigation() {
  return (
    <NavigationWrapper>
      <Logo />
      <Tabs />
      <ThemeIcon />
    </NavigationWrapper>
  );
}
