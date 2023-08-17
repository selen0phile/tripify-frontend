import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import { Box, Button, Card, Container, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, FormControl, FormLabel, GridItem, Heading, Input, RangeSlider, RangeSliderFilledTrack, RangeSliderMark, RangeSliderThumb, RangeSliderTrack, SimpleGrid, Slider, SliderFilledTrack, SliderMark, SliderThumb, SliderTrack, Text, useDisclosure } from '@chakra-ui/react'
import { api_base } from './Config'
import HotelCard from './components/HotelCard'
import { Select } from 'chakra-react-select'
import { FormField } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { BiFilterAlt } from 'react-icons/bi'
import Navbar2 from './components/Navbar2'
import CardSlider from './components/CardSlider'

function Hotels() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  const [hotels, setHotels] = useState([])
  const [cities, setCities] = useState([])
  const [filter, setFilter] = useState({
    name: '',
    address: '',
    city_id: '',
    min_price: 0,
    max_price: 5000,
    has_wifi: '',
    has_parking: '',
    has_gym: '',
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
    var url = api_base + '/hotel/?'
    Object.keys(filter).forEach(x => {
      url = url + x + '=' + filter[x] + '&'
    })
    const r = await fetch(url)
    const j = await r.json()
    setHotels(j)
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
          <Text fontSize='4xl'>Hotels</Text>
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
              <FormField>Price per day</FormField>
              <RangeSlider min={0} max={5000} step={30} value={[filter.min_price, filter.max_price]} onChange={(val) => {
                var obj = { ...filter }
                obj.min_price = val[0]
                obj.max_price = val[1]
                setFilter(obj)
              }}>
                <RangeSliderMark value={0} mt='5' ml='-2.5' fontSize='sm'>৳0</RangeSliderMark>
                <RangeSliderMark value={1000} mt='5' ml='-2.5' fontSize='sm'>৳1000</RangeSliderMark>
                <RangeSliderMark value={2000} mt='5' ml='-2.5' fontSize='sm'>৳2000</RangeSliderMark>
                <RangeSliderMark value={3000} mt='5' ml='-2.5' fontSize='sm'>৳3000</RangeSliderMark>
                <RangeSliderMark value={4000} mt='5' ml='-2.5' fontSize='sm'>৳4000</RangeSliderMark>
                <RangeSliderMark value={5000} mt='5' ml='-2.5' fontSize='sm'>৳5000</RangeSliderMark>
                <RangeSliderTrack bg='red.100'>
                  <RangeSliderFilledTrack bg='tomato' />
                </RangeSliderTrack>
                <RangeSliderThumb boxSize={6} index={0} />
                <RangeSliderThumb boxSize={6} index={1} />
              </RangeSlider>
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
            <FormControl>
              <FormField>Facilities</FormField>
              <Select
                isMulti
                options={
                  [
                    {
                      label: "Wifi",
                      value: "has_wifi"
                    },
                    {
                      label: "Gym",
                      value: "has_gym",
                    },
                    {
                      label: "Parking",
                      value: "has_parking",
                    },
                  ]
                }
                onChange={(v) => {
                  var obj = { ...filter }
                  obj['has_wifi'] = ''
                  obj['has_gym'] = ''
                  obj['has_parking'] = ''
                  v.forEach(x => obj[x.value] = '1')
                  setFilter(obj)
                }}
                className="basic-multi-select"
                classNamePrefix="select"
              />
            </FormControl>
            <br />
            <FormControl>
              <FormField>Sort by</FormField>
              <Select placeholder='Select option'>
                <option value='price_per_day'>Price</option>
                <option value='name'>Name</option>
              </Select>
            </FormControl>
            <Button onClick={searchClick}>Search</Button>
          </GridItem>
          <GridItem colSpan={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }}>
            <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }} spacing={1} style={{ width: '100%' }} p='30px'>
              {
                hotels.map((item, index) => (
                  <Card key={index} className="card" paddingBottom={'100%'} width={'100%'} position={'relative'}>
                    <CardSlider price={item.price_per_day} href={`/hotel/${item.hotel_id}`} title={item.name} info={item.address} rating={Math.floor(Math.random() * 5)} />
                  </Card>
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

export default Hotels