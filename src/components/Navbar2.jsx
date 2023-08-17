import { Box, Button, CloseButton, Flex, HStack, IconButton, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, VStack, VisuallyHidden, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/react";
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import Cart from "./Cart";

function Navbar2({ openDrawer }) {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Box style={{ zIndex: '20' }} position={'sticky'} top='0'>
            <Modal onClose={onClose} size={'lg'} isOpen={isOpen} isCentered scrollBehavior={'inside'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Trip Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Cart/>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <chakra.header bg={bg} w="full" px={{ base: 2, sm: 4, }} py={4} shadow="md">
                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <Flex>
                        <chakra.a href="/" title="Choc Home Page" display="flex" alignItems="center" style={{ padding: '2px' }}>
                            <img src='https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg'
                                width='200px' />
                        </chakra.a>
                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <Button colorScheme="green" size="sm" onClick={onOpen}>
                            My Trip
                        </Button>
                        <HStack spacing={1} mr={1} color="brand.500" display={{ base: "none", md: "inline-flex", }}>
                            <Link to='/hotels'><Button variant="ghost">Hotels</Button></Link>
                            <Link to='/destinations'><Button variant="ghost">Destinations</Button></Link>
                            <Link to='/activities'><Button variant="ghost">Activities</Button></Link>
                            <Link to='/trips'><Button variant="ghost">Trips</Button></Link>
                            <Link to='/restaurants'><Button variant="ghost">Restaurants</Button></Link>
                        </HStack>
                        <Box display={{ base: "inline-flex", md: "none", }}>
                            <IconButton display={{ base: "flex", md: "none", }} aria-label="Open menu" fontSize="20px"
                                color="gray.800" _dark={{ color: "inherit", }} variant="ghost" icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />

                            <VStack pos="absolute" top={0} left={0} right={0} display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column" p={2} pb={4} m={2} bg={bg} spacing={3} rounded="sm" shadow="sm">
                                <CloseButton aria-label="Close menu" onClick={mobileNav.onClose} />

                                <Button w="full" variant="ghost">
                                    Features
                                </Button>
                                <Button w="full" variant="ghost">
                                    Pricing
                                </Button>
                                <Button w="full" variant="ghost">
                                    Blog
                                </Button>
                                <Button w="full" variant="ghost">
                                    Company
                                </Button>
                                <Button w="full" variant="ghost">
                                    Sign in
                                </Button>
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.header>
        </Box>
    );
}

export default Navbar2