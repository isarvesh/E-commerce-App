import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Text, Heading, Flex, Image } from "@chakra-ui/react";
import { removeItem, increaseQuantity, decreaseQuantity } from "../redux/cartSlice";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (itemId) => {
    dispatch(removeItem(itemId));
  };

  const handleIncreaseQuantity = (itemId) => {
    dispatch(increaseQuantity(itemId));
  };

  const handleDecreaseQuantity = (itemId) => {
    dispatch(decreaseQuantity(itemId));
  };

  
  const calculateTotalPrice = (item) => {
    return (item.quantity * item.price).toFixed(2); 
  };

  const totalAmount = cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);

  return (
    <Box p={4} maxW="600px" mx="auto">
      <Heading as="h1" size="lg" mb={4}>
        Shopping Cart
      </Heading>
      {cartItems.map((item) => (
        <Box key={item.id} p={4} borderWidth="1px" borderRadius="lg" overflow="hidden">
          <Flex alignItems="center" mb={2}>
            <Image src={item.image} alt={item.name} boxSize="70px" objectFit="cover" mr={4} />
            <Heading as="h3" size="md" mr={2}>
              {item.name}
            </Heading>
            <Text fontWeight="bold">₹{item.price}</Text>
          </Flex>
          <Text fontSize="sm" mb={2}>
            {item.description}
          </Text>
          <Flex alignItems="center">
            <Button colorScheme="blue" size="sm" mr={2} onClick={() => handleDecreaseQuantity(item.id)}>
              -
            </Button>
            <Text>{item.quantity}</Text>
            <Button colorScheme="blue" size="sm" ml={2} onClick={() => handleIncreaseQuantity(item.id)}>
              +
            </Button>
            <Text fontWeight="bold" ml="auto">
              Total Price: ₹{calculateTotalPrice(item)}
            </Text>
            <Button colorScheme="red" size="sm" ml={4} onClick={() => handleRemoveItem(item.id)}>
              Remove
            </Button>
          </Flex>
        </Box>
      ))}
      <Box mt={4}>
        <Text fontSize="lg" fontWeight="bold">
          Total Amount: ₹{totalAmount}
        </Text>
      </Box>
    </Box>
  );
};

export default Checkout;
