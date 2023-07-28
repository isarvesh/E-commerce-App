import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Box, Button, Image, Heading, Text, Flex, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { addItem } from "../redux/cartSlice";

const Item = () => {
  const { id } = useParams();
  const itemId = parseInt(id);
  const item = useSelector((state) => state.items.find((item) => item.id === itemId));
  const dispatch = useDispatch();
  const toast = useToast();

  const handleAddToCart = () => {
    dispatch(addItem(item));

    toast({
      title: "Item added to cart",
      description: `${item.name} has been added to your cart.`,
      status: "success",
      duration: 3000, 
      isClosable: true,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 20 }}
      style={{ maxWidth: "600px", margin: "0 auto" }} 
    >
      <Box p={4}>
        <Image src={item.image} alt={item.name} />
        <Heading as="h2" size="lg" mt={4} mb={2} textAlign="center"> 
          {item.name}
        </Heading>
        <Text fontSize="lg" fontWeight="bold" textAlign="center"> 
          ₹{item.price}
        </Text>
        <Text fontSize="md" mt={4}>
          {item.description}
        </Text>
        <Flex justifyContent="center"> 
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
            <Button mt={4} colorScheme="blue" onClick={handleAddToCart}>
              Add to Cart
            </Button>
          </motion.div>
        </Flex>
      </Box>
    </motion.div>
  );
};

export default Item;
