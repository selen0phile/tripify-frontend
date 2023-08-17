'use client'
import ActivityCard from './ActivityCard'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
    Box,
    chakra,
    Container,
    Stack,
    Text,
    Image,
    Flex,
    VStack,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    useColorModeValue,
    VisuallyHidden,
    List,
    ListItem,
    Badge,
    Divider,
    TableContainer,
    Table,
    Tbody,
    Tr,
    Td,
    Tfoot,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Textarea,
    useDisclosure,
} from '@chakra-ui/react'
import { MdLocalShipping, MdSportsGymnastics } from 'react-icons/md'
import Carousel from './Carousel'
import Carousel2 from './Carousel2'
import { ImPriceTag } from 'react-icons/im'
import { CgGym } from 'react-icons/cg'

import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { AiFillAccountBook, AiFillCar, AiOutlineWifi, AiOutlineMail } from 'react-icons/ai'
import ColoredCircle from './ColoredCircle'
import Feature from './Feature'
import StarRating from './StarRating'
import RatingBox from './RatingBox'
import Review from './Review'
import EmblaCarousel from './EmblaCarousel'
// import { EmblaCarousel } from './EmblaCarousel'
import React, { useEffect } from 'react'

export default function ActivityDetails({ props }) {
    const [startDate, setStartDate] = React.useState(new Date());

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [rating, setRating] = React.useState(0)
    const [review, setReview] = React.useState('')
    const [destinations, setDestinations] = React.useState([])
    async function load() {
        var url = api_base + '/destination/?'
        const r = await fetch(url)
        const j = await r.json()
        setDests(j)
    }
    useEffect(() => {

    }, [])
    return (
        <Container maxW={'7xl'}>
            <SimpleGrid
                columns={{ base: 1, lg: 2 }}
                spacing={{ base: 8, md: 10 }}
                pt={{ base: 18, md: 24 }}
                pb={{ base: 8, md: 14 }}
            >
                <Box>
                    <Box>
                        <Carousel />
                    </Box>
                </Box>
                <Stack>
                    <Box as={'header'}>
                        <Heading
                            textAlign={'center'}
                            lineHeight={1.1}
                            fontWeight={600}
                            fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
                            {props.name}
                        </Heading>
                    </Box>
                    <Divider borderWidth={'1px'} m='10px' />
                    <Stack spacing={{ base: 4, sm: 6 }}>
                        <Text
                            color={useColorModeValue('gray.500', 'gray.400')}
                            fontSize={'2xl'}
                            fontWeight={'300'}>
                            {props.description}
                        </Text>
                        <Text fontSize={'lg'}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
                            at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis
                            porro, quae, quisquam quos reprehenderit velit? Natus, totam.
                        </Text>
                        <Box>
                            {/* <Text
                                fontSize={{ base: '20px', lg: '25px' }}
                                // color={useColorModeValue('yellow.500', 'yellow.300')}
                                // fontWeight={'500'}
                                textTransform={'uppercase'}
                                mb={'4'}>
                                Features
                            </Text> */}
                        </Box>
                    </Stack>
                </Stack>
                <Stack spacing={{ base: 6, md: 10 }}>
                    {/* <Text
                        fontSize={{ base: '20x', lg: '25px' }}
                        // color={useColorModeValue('yellow.500', 'yellow.300')}
                        // fontWeight={'500'}
                        textTransform={'uppercase'}
                        mb={'4'}>
                        More
                    </Text> */}
                    <Text fontSize='3xl'>
                        Details
                    </Text>
                    <Stack
                        spacing={{ base: 4, sm: 6 }}
                        direction={'column'}
                    >
                        <Box>

                            <TableContainer>
                                <Table variant='striped'>
                                    <Tbody>
                                        <Tr>
                                            <Td>
                                                <Flex alignItems='center'>
                                                    <Box><ImPriceTag size={30} /></Box><Box>&emsp;Category</Box>
                                                </Flex>
                                            </Td>
                                            <Td>
                                                {props.category}
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Flex alignItems='center'>
                                                    <Box>
                                                        <FaMapMarkerAlt size={30} />
                                                    </Box>
                                                    <Box>
                                                        &emsp;Minimum Age
                                                    </Box>
                                                </Flex>
                                            </Td>
                                            <Td>
                                                {props.min_age}
                                            </Td>
                                        </Tr>
                                        <Tr>
                                            <Td>
                                                <Flex alignItems='center'>
                                                    <Box>
                                                        <FaMapMarkerAlt size={30} />
                                                    </Box>
                                                    <Box>
                                                        &emsp;Maximum Age
                                                    </Box>
                                                </Flex>
                                            </Td>
                                            <Td>
                                                {props.max_age}
                                            </Td>
                                        </Tr>
                                    </Tbody>
                                </Table>
                            </TableContainer>
                        </Box>
                        <Box>
                            <Text fontSize={'3xl'}>
                                Destinations
                            </Text>
                            <SimpleGrid columns={{ base: 1, sm: 2, md: 2, lg: 2, xl: 2 }} spacing={'20px'}>
                                {destinations && destinations.map((obj, idx) => {
                                    return <DestinationCard props={obj} />
                                }
                                )}
                            </SimpleGrid>
                        </Box>
                    </Stack>
                </Stack>
                <Stack>
                    <Flex justifyContent={'center'}>
                        <RatingBox />
                    </Flex>
                    <Box>
                        <Text fontSize='3xl' textAlign={'center'}>
                            Reviews
                        </Text>
                        <Box marginTop='20px'>
                            <EmblaCarousel />
                        </Box>
                        <Box marginTop={'20px'}>
                            <Text fontSize='3xl' textAlign={'center'}>
                                Write a Review
                            </Text>
                            <Box margin='10px'>
                                <Box marginBottom={'10px'}>
                                    <StarRating allowReview={true} rating={rating} setRating={setRating} size={30} />
                                </Box>
                                <Textarea marginBottom={'10px'} value={review} rows='4' variant='filled' placeholder='Review' onChange={(e) => {
                                    setReview(e.target.value)
                                }} />
                                <Button colorScheme="blue" size={'md'}>Post</Button>
                            </Box>
                        </Box>
                    </Box>
                </Stack>
            </SimpleGrid>
            <Box height={'500px'}>
            </Box>
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Add Hotel to Trip</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody display={'flex'} justifyContent={'space-between'}>
                        <Box>
                            <Box>
                                <Text fontSize='xl'>Start</Text>
                            </Box>
                            <Box>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </Box>
                        </Box>
                        <Box>
                            <Box>
                                <Text fontSize='xl'>End</Text>
                            </Box>
                            <Box>
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                            </Box>
                        </Box>
                    </ModalBody>
                    <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'} margin='12px'>
                        <Box>
                            <Button margin='10px' colorScheme='blue' onClick={() => alert(1)}>OK</Button>
                        </Box>
                        <Box>
                            <Button margin='10px' onClick={onClose}>Cancel</Button>
                        </Box>
                    </Box>
                </ModalContent>
            </Modal>
        </Container>
    )
}
