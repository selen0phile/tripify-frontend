import { Badge, Box, Button } from '@chakra-ui/react'
import React from 'react'

function Feature({ name, icon, available }) {
    return (
        <div>
            <Button position='relative' padding='20px' margin='10px' leftIcon={icon} color={available ? '#00bb00' : 'red'} borderColor={available ? '#00ff00' : 'red'} variant='outline'>
                {name}
                {
                    available ?
                        <Box position='absolute' top='-5' left='0' fontSize='12px' m='2px'>
                            <Badge color='#00ff00' fontWeight={'bold'}>
                                AVALIABLE
                            </Badge>
                        </Box>
                        :
                        <Box position='absolute' top='-5' left='0' fontSize='12px' m='2px' >
                            <Badge color='red' fontWeight={'bold'}>
                                UNAVALIABLE
                            </Badge>
                        </Box>
                }
            </Button>
        </div>
    )
}

export default Feature