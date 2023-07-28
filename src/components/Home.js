import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Text, Heading, Grid, Image, Flex, Select, useToast } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { addItem } from "../redux/cartSlice";

const Home = () => {
  const items = useSelector((state) => state.items);
  const dispatch = useDispatch();
  const toast = useToast();

  const [selectedSortOption, setSelectedSortOption] = useState("default");
  const [selectedFilterOption, setSelectedFilterOption] = useState("all");

  const handleSortChange = (e) => {
    setSelectedSortOption(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilterOption(e.target.value);
  };

  const handleAddToCart = (item) => {
    dispatch(addItem(item));

    toast({
      title: "Item added to cart",
      description: `${item.name} has been added to your cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  let sortedItems = [...items];
  if (selectedSortOption === "lowToHigh") {
    sortedItems.sort((a, b) => a.price - b.price);
  } else if (selectedSortOption === "highToLow") {
    sortedItems.sort((a, b) => b.price - a.price);
  }

  if (selectedFilterOption !== "all") {
    sortedItems = sortedItems.filter((item) => item.name.startsWith(selectedFilterOption));
  }

  const uniqueAlphabets = [...new Set(sortedItems.map((item) => item.name.charAt(0).toUpperCase()))];

  return (
    <Box p={4}>
      <Heading as="h1" size="lg" mb={4}>
        Welcome to My E-commerce Store!
      </Heading>
      <Flex mb={4} justifyContent="space-between" alignItems="center">
        <Flex alignItems="center">
          <Text mr={2}>Sort By:</Text>
          <Select value={selectedSortOption} onChange={handleSortChange} width="200px">
            <option value="default">Default</option>
            <option value="lowToHigh">Price: Low to High</option>
            <option value="highToLow">Price: High to Low</option>
          </Select>
        </Flex>
        <Flex alignItems="center">
          <Text mr={2}>Filter By:</Text>
          <Select value={selectedFilterOption} onChange={handleFilterChange} width="200px">
            <option value="all">All</option>
            {uniqueAlphabets.map((alphabet) => (
              <option key={alphabet} value={alphabet}>
                {alphabet}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
      <Grid templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }} gap={4}>
        {sortedItems.map((item) => (
          <Box key={item.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={item.image} alt={item.name} />
            <Box p={4}>
              <Heading as="h3" size="md" mb={2}>
                {item.name}
              </Heading>
              <Text fontSize="sm">{item.description}</Text>
              <Text fontWeight="bold" mt={2}>
                ₹{item.price}
              </Text>
              <Flex mt={4} justifyContent="center" alignItems="center">
                <Button colorScheme="blue" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
                <Link to={`/item/${item.id}`}>
                  <Button ml={2} colorScheme="teal">
                    View Details
                  </Button>
                </Link>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
