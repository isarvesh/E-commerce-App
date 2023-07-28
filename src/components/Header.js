import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);

  const getTotalItemsInCart = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPriceInCart = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Box bg="teal" p={4} color="white">
      <Flex alignItems="center">
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Text fontSize="xl" fontWeight="bold">
            My E-Commerce App
          </Text>
        </Link>
        <Spacer />
        <Link to="/checkout" style={{ textDecoration: "none", color: "white" }}>
          <Box as="span" display="flex" alignItems="center" cursor="pointer">
            <AiOutlineShoppingCart style={{ fontSize: "1.5rem" }} />
            <Text ml={2} fontSize="md">
              Cart ({getTotalItemsInCart()} items) - ₹{getTotalPriceInCart()}
            </Text>
          </Box>
        </Link>
      </Flex>
    </Box>
  );
};

export default Header;
