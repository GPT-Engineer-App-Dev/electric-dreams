import { Box, Button, Container, Flex, Heading, HStack, Image, Link, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.800" color="white" padding={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <HStack spacing={8}>
          <Link href="#home" _hover={{ textDecoration: "none", color: "blue.300" }}>Home</Link>
          <Link href="#products" _hover={{ textDecoration: "none", color: "blue.300" }}>Products</Link>
          <Link href="#about" _hover={{ textDecoration: "none", color: "blue.300" }}>About Us</Link>
          <Link href="#contact" _hover={{ textDecoration: "none", color: "blue.300" }}>Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Box id="home" bg="blue.700" color="white" padding={16} textAlign="center">
        <Heading size="2xl" mb={4}>Welcome to ElectroShop</Heading>
        <Text fontSize="xl" mb={8}>Your one-stop shop for the latest electronics</Text>
        <Button colorScheme="teal" size="lg">Shop Now</Button>
      </Box>

      {/* Featured Products Section */}
      <Container id="products" maxW="container.xl" py={16}>
        <Heading size="xl" mb={8} textAlign="center">Featured Products</Heading>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <VStack borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src="https://via.placeholder.com/150" alt="Product 1" />
            <Text fontWeight="bold">Product 1</Text>
            <Text>$299.99</Text>
            <Button colorScheme="teal">Buy Now</Button>
          </VStack>
          <VStack borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src="https://via.placeholder.com/150" alt="Product 2" />
            <Text fontWeight="bold">Product 2</Text>
            <Text>$399.99</Text>
            <Button colorScheme="teal">Buy Now</Button>
          </VStack>
          <VStack borderWidth="1px" borderRadius="lg" overflow="hidden" p={5}>
            <Image src="https://via.placeholder.com/150" alt="Product 3" />
            <Text fontWeight="bold">Product 3</Text>
            <Text>$499.99</Text>
            <Button colorScheme="teal">Buy Now</Button>
          </VStack>
        </SimpleGrid>
      </Container>

      {/* Footer */}
      <Box id="contact" bg="blue.800" color="white" py={10}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <Box>
              <Heading size="md" mb={4}>Contact Us</Heading>
              <Text>Email: support@electroshop.com</Text>
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
        </Container>
      </Box>
    </Box>
  );
};

export default Index;