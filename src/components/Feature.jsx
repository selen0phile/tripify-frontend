import { Badge, Box, Button } from '@chakra-ui/react'
import React from 'react'

function Feature({ name, icon, available }) {
    return (
        <div>
             {/* color={available ? '#00bb00' : 'red'} */}
            <Button  position='relative' padding='20px' margin='10px' leftIcon={icon} borderColor={available ? '#00ff00' : 'red'} variant='outline'>
                {name}
                {
                    available ?
                        <Box position='absolute' bottom='-5' fontSize='12px' m='2px'>
                            <Badge color='#00ff00' fontWeight={'bold'}>
                                AVALIABLE
                            </Badge>
                        </Box>
                        :
                        <Box position='absolute' bottom='-5' fontSize='12px' m='2px' >
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