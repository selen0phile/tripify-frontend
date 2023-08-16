import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Box, Button, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, GridItem, Heading, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderMark, RangeSliderThumb, RangeSliderTrack, SimpleGrid, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, useDisclosure } from '@chakra-ui/react'
import { api_base } from './Config'
import HotelCard from './components/HotelCard'
import { MultiSelect } from 'chakra-multiselect'
import { Select } from 'chakra-react-select'
import { FormField } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { BiFilterAlt } from 'react-icons/bi'
import Navbar2 from './components/Navbar2'

function Destinations() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const [dests, setDests] = useState([])
  const [cities, setCities] = useState([])
  const [filter, setFilter] = useState({
    name: '',
    address: '',
    city_id: '',
  })
  const [page, setPage] = useState(1)
  const [value, setValue] = useState([])
  async function searchClick() {
    // var url = api_base + '/hotel/?'
    // Object.keys(filter).forEach(x => {
    //   url = url + x + '=' + filter[x] + '&'
    // })
    // console.log(url)
    // alert(url)
    await load()
  }
  async function getCities() {
    const url = api_base + '/city?name=a&country_name=ban'
    const r = await fetch(url)
    const j = await r.json()
    var tmp = []
    for (var i = 0; i < j.length; i++) {
      tmp.push({
        label: j[i].name,
        value: j[i].city_id
      })
    }
    setCities(tmp)
    console.log(tmp)
  }
  async function load() {
    var url = api_base + '/destination/?'
    Object.keys(filter).forEach(x => {
      url = url + x + '=' + filter[x] + '&'
    })
    console.log(url)
    const r = await fetch(url)
    const j = await r.json()
    setDests(j)
  }
  useEffect(() => {
    getCities()
    load()
  }, [])
  return (
    <div>
      <Navbar2 />
      <Container maxW='2000px'>
        <Box margin='20px' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Text fontSize='4xl'>Destinations</Text>
        </Box>
        <SimpleGrid columns={{ base: 1, sm: 1, md: 3, lg: 4, xl: 5 }}>
          <GridItem colSpan={{ base: 1, sm: 1, md: 1, lg: 1, xl: 1 }} padding='20px'>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input variant='filled' placeholder='' value={filter.name} onChange={(e) => {
                var obj = { ...filter }
                obj['name'] = e.target.value
                setFilter(obj)
              }} />
            </FormControl>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Input variant='filled' placeholder='' value={filter.address} onChange={(e) => {
                var obj = { ...filter }
                obj['address'] = e.target.value
                setFilter(obj)
              }} />
            </FormControl>
            <br />
            <FormControl>
              <FormField>City</FormField>
              <Select
                isMulti
                options={cities}
                className="basic-multi-select"
                classNamePrefix="select"
                onChange={(v) => {
                  var obj = { ...filter }
                  obj.city_id = ''
                  v.forEach(x => obj.city_id += x.value + ',')
                  setFilter(obj)
                }}
              />
            </FormControl>
            <br />
            <Button onClick={searchClick}>Search</Button>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}>
            <SimpleGrid columns={{ base: 1, sm: 1, md: 1, lg: 2, xl: 3 }} spacing={10} style={{ width: '100%' }} p='30px'>
              {
                dests.map((item, index) => (
                  <Link to={`/destination/${item.destination_id}`}>
                    <HotelCard props={item} height='256px' />
                  </Link>
                ))
              }
            </SimpleGrid>
          </GridItem>
        </SimpleGrid>
        {/* <Drawer
          size='md'
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Filters</DrawerHeader>
            <DrawerBody>

            </DrawerBody>
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer> */}
      </Container>
    </div>
  )
}

export default Destinations