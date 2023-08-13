'use client'

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  CardFooter,
  CardBody,
  CardHeader,
  Card,
  Divider,
  ButtonGroup,
  Button,
  Badge,
} from '@chakra-ui/react'
import { AiOutlineWifi } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import CaptionCarousel from './Carousel'


export default function HotelCard({ props }) {
  return (
    <Card maxW='sm' className="card">

      {/* <Image
          src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        /> */}
      <Box style={{ width: '100%', paddingBottom:'20px'}}>
        <CaptionCarousel />
      </Box>
      {/* <Box style={{margin:'5px'}}> */}
      <Box>
        <Box style={{ padding: '10px' }}>
          <Heading size='md'>{props.name}</Heading>
          <Box style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {props.description}
          </Box>
          <Box style={{ height: '30px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <b>Location</b>: {props.address}
          </Box>
          <Text color='blue.600'>
            ${props.price_per_day} per day
          </Text>
        </Box>
      </Box>
      {/* </Box> */}
      {/* <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Link to={`/hotel/${props.hotel_id}`}>
            <Button variant='solid' colorScheme='blue'>
              VIEW DETAILS
            </Button>
          </Link>
          <Button variant='ghost' colorScheme='blue'>
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter> */}
    </Card>
  )
}
