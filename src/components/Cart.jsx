import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Flex, IconButton, Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getList, removeFromList } from "../LocalStorage";
import { DeleteIcon, ExternalLinkIcon } from "@chakra-ui/icons";

export default function Cart() {
  const [hotels, setHotels] = useState([])
  const [destinations, setDestinations] = useState([])
  const [activities, setActivities] = useState([])

  useEffect(() => {
    setHotels(getList('_hotels'))
    setDestinations(getList('_destinations'))
  }, [])

  return (
    <Box>
      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              <Text fontSize={'xl'} fontWeight={'500'}>Hotels</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {
              hotels.map((hotel, id) =>
                <Flex key={id} alignItems={'center'} justifyContent={'space-between'} padding={'10px'}>
                  <TableContainer>
                    <Table variant='simple' size='sm'>
                      <Tbody>
                        <Tr ><Th>Name</Th><Td>
                          <Flex alignItems={'center'}>
                            <Link href={'/hotel/' + hotel.id} isExternal alignItems={'center'}>
                              {hotel.name}
                            </Link>
                            <ExternalLinkIcon mx='2px' />
                          </Flex>
                        </Td></Tr>
                        <Tr><Th>Start Date</Th><Td>{new Date(hotel.start).toLocaleDateString()}</Td></Tr>
                        <Tr><Th>End Date</Th><Td>{new Date(hotel.end).toLocaleDateString()}</Td></Tr>
                        <Tr><Th>Cost</Th><Td>৳{hotel.cost}</Td></Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                  <Box>
                    <IconButton
                      colorScheme='blue'
                      aria-label='Search database'
                      icon={<DeleteIcon />}
                      onClick={() => {
                        removeFromList('_hotels', hotel)
                        setHotels(getList('_hotels'))
                      }}
                    />
                  </Box>
                </Flex>
              )
            }
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='left'>
              <Text fontSize={'xl'} fontWeight={'500'}>Destinations</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            {
              destinations.map((destination, id) =>
                <Flex key={id} alignItems={'center'} justifyContent={'space-between'}>
                  <TableContainer margin={'10px'}>
                    <Table variant='simple' size='sm'>
                      <Tbody>
                        <Tr><Th>Name</Th><Td>{destination.name}</Td></Tr>
                        <Tr><Th>Address</Th><Td>{destination.address}</Td></Tr>
                        <Tr><Th>Start Date</Th><Td>{new Date(destination.start).toLocaleDateString()}</Td></Tr>
                        <Tr><Th>End Date</Th><Td>{new Date(destination.end).toLocaleDateString()}</Td></Tr>
                      </Tbody>
                    </Table>
                  </TableContainer>
                  <Box>
                    <IconButton
                      colorScheme='blue'
                      aria-label='Search database'
                      icon={<DeleteIcon />}
                      onClick={() => {
                        removeFromList('_destinations', destination)
                        setDestinations(getList('_destinations'))
                      }}
                    />
                  </Box>
                </Flex>
              )
            }
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Text>Destinations</Text>
      <Text>Activities</Text>
      <Text>Restaurants</Text>
    </Box >
  )
}