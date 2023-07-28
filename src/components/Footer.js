import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" align="center" justify="center" p={4} bg="gray.200">
      <Box>
        <Text>&copy; {new Date().getFullYear()}My E-commerce App. All rights reserved by Sarvesh</Text>
      </Box>
    </Flex>
  );
};

export default Footer;
