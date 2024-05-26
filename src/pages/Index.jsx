import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Stack, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" p={4} justify="space-between" align="center">
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
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={6}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Featured Products Section */}
      <Box id="products" py={20} px={4}>
        <Heading size="xl" textAlign="center" mb={10}>Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 1" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 1</Heading>
              <Text mb={4}>High-quality electronic product</Text>
              <Button colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 2" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 2</Heading>
              <Text mb={4}>Latest technology at your fingertips</Text>
              <Button colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src="https://via.placeholder.com/300" alt="Product 3" />
            <Box p={6}>
              <Heading size="md" mb={2}>Product 3</Heading>
              <Text mb={4}>Affordable and reliable</Text>
              <Button colorScheme="teal">Buy Now</Button>
            </Box>
          </Box>
        </SimpleGrid>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.800" color="white" py={10} px={4}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Box>
            <Heading size="md" mb={4}>Contact Us</Heading>
            <Text>123 Electro St.</Text>
            <Text>ElectroCity, EC 12345</Text>
            <Text>Email: contact@electroshop.com</Text>
            <Text>Phone: (123) 456-7890</Text>
          </Box>
          <Box>
            <Heading size="md" mb={4}>Follow Us</Heading>
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
          </Box>
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default Index;