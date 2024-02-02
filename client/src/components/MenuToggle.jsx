// menu toggle button

import {Box} from '@chakra-ui/react';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

const MenuToggle = ({toggle, isOpen}) => {
    return(
        <Box display={{base: 'block', md: 'none'}} onClick={toggle}>
            {isOpen ? <IoIosCloseCircleOutline /> : <IoMdMenu />}
        </Box>
    )
}

export default MenuToggle