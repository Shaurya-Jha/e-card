import {Link, Box, Flex, Text, Button, Stack} from '@chakra-ui/react';
import Logo from './Logo';
import { useState } from 'react';

const Navbar = (props) => {

    // state to toggle on and off the menu button
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        // if its true it will change to false
        // if its false it will change to true
        setIsOpen(!isOpen);
    }

    return ( 
        <></>
     );
}
 
export default Navbar;

// close icon button
const CloseIcon = () => {
    <svg width="24" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <title>Close</title>
    <path
      fill="white"
      d="M9.00023 7.58599L13.9502 2.63599L15.3642 4.04999L10.4142 8.99999L15.3642 13.95L13.9502 15.364L9.00023 10.414L4.05023 15.364L2.63623 13.95L7.58623 8.99999L2.63623 4.04999L4.05023 2.63599L9.00023 7.58599Z"
    />
  </svg>
}