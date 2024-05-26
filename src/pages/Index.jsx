import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#home" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link href="#products" _hover={{ textDecoration: "none", color: "blue.300" }}>Products</Link>
          <Link href="#about" _hover={{ textDecoration: "none", color: "blue.300" }}>About Us</Link>
          <Link href="#contact" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box id="home" bg="blue.700" color="white" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Featured Products Section */}
      <Box id="products" py={20} textAlign="center">
        <Heading as="h2" size="xl" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack>
            <Image src="https://via.placeholder.com/150" alt="Product 1" />
            <Text fontSize="lg" fontWeight="bold">Product 1</Text>
            <Text>$299.99</Text>
          </VStack>
          <VStack>
            <Image src="https://via.placeholder.com/150" alt="Product 2" />
            <Text fontSize="lg" fontWeight="bold">Product 2</Text>
            <Text>$399.99</Text>
          </VStack>
          <VStack>
            <Image src="https://via.placeholder.com/150" alt="Product 3" />
            <Text fontSize="lg" fontWeight="bold">Product 3</Text>
            <Text>$499.99</Text>
          </VStack>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={10} textAlign="center">
        <VStack spacing={4}>
          <Text>Contact us: info@electroshop.com</Text>
          <HStack spacing={4}>
            <Link href="https://facebook.com" isExternal>
              <FaFacebook size="24px" />
            </Link>
            <Link href="https://twitter.com" isExternal>
              <FaTwitter size="24px" />
            </Link>
            <Link href="https://instagram.com" isExternal>
              <FaInstagram size="24px" />
            </Link>
          </HStack>
          <Text>&copy; 2023 ElectroShop. All rights reserved.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;