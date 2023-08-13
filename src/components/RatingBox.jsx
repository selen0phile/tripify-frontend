import React from 'react'
import StarRating from './StarRating'
import { Container, Heading, Text, VStack } from '@chakra-ui/react'

function RatingBox() {
    return (
        <Container margin={'20px'}>
            <VStack>
                <Text fontSize='20px'>
                    Rating Overview
                </Text>
                <Heading textAlign={'center'}>
                    4.56
                </Heading>
                <StarRating rating={4} size={50} />
            </VStack>
        </Container>
    )
}

export default RatingBox