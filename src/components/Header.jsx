import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (




    <HStack p={"4"} shadow={"base"} bgColor={"blackAlpha.600"}>
      <Button variant={"unstyled"} color={"white"} margin={"1"} padding={"3"} bgColor={"red.900"} >
        <Link to="/" >Home</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} bgColor={"red.900"} >
        <Link to="/exchanges">Exchanges</Link>
      </Button>
      <Button variant={"unstyled"} color={"white"} padding={"3"} bgColor={"red.900"} >
        <Link to="/coins">Coins</Link>
      </Button>
    </HStack>
  );
};

export default Header;
