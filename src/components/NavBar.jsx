
import React from 'react'
import CartWidget from './CartWidget.jsx';
import { Flex, Box, Spacer, Menu, MenuButton, Button,Center, MenuList, MenuItem, Divider,} from '@chakra-ui/react'
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <div style={{ backgroundColor: '#00cfff', color: 'black' }}>
            <Center fontSize='5xl' p='4' as='i'>
                Tienda de ropa Mora
            </Center>
            <Divider orientation='horizontal' />
            <Flex alignItems='center'>
                <Box p='2'>
                    <Link to={'/'}>
                        <h1>Inicio</h1>
                    </Link>
                </Box>
                <Menu p='2' >
                    <MenuButton >
                        Categorias
                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Link to='/category/calzado'>
                                <p>Calzado</p>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/pantalon'>
                                <p>Pantalones</p>
                            </Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to='/category/camisa'>
                                <p>Camisas</p>
                            </Link>
                        </MenuItem>
                    </MenuList>
                </Menu>
                <Spacer />
                <Box p='4'>
                    <CartWidget />
                </Box>
            </Flex>
        </div>
    );
}

export default NavBar;