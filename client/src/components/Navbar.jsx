import { Link, Box, Flex, Text, Button, Stack } from "@chakra-ui/react";
import Logo from "./Logo";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdCloseCircle } from "react-icons/io";

const Navbar = (props) => {
  // state to toggle on and off the menu button
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    // if its true it will change to false
    // if its false it will change to true
    setIsOpen(!isOpen);
  };

  return (
    <>
        <NavbarContainer {...props}>
            <Logo />

            <MenuToggle toggle={toggle} isOpen={isOpen} />
            <MenuLinks isOpen={isOpen} />
        </NavbarContainer>
    </>
  )
};

export default Navbar;

// close icon button
// const CloseIcon = () => {
//   <IoMdCloseCircle />
// };

// menu icon button
// const MenuIcon = () => {
//   <MdOutlineMenu />
// };

// toggle menu
const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <IoMdCloseCircle /> : <MdOutlineMenu />}
    </Box>
  );
};

// menu item
const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
  return (
    <Link href={to}>
      <Text display={"block"} {...rest}>
        {children}
      </Text>
    </Link>
  );
};

// menu links for the navigation
const MenuLinks = ({ isOpen }) => {
  return (
    <Box
      display={{ base: isOpen ? "block" : "none", md: "block" }}
      flexBasis={{ base: "100%", md: "auto" }}
    >
      <Stack
        spacing={8}
        align={"center"}
        justify={["center", "space-between", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[4, 4, 0, 0]}
      >
        <MenuItem to="/">Home</MenuItem>
        <MenuItem>How it works</MenuItem>
        <MenuItem>Features</MenuItem>
        <MenuItem to="/login">
          <Button>Login</Button>
        </MenuItem>
      </Stack>
    </Box>
  );
};

// navbar container
const NavbarContainer = ({ children, ...props }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
    //   bg={["primary.500", "primary.500", "transparent", "transparent"]}
    //   color={["white", "white", "primary.700", "primary.700"]}
      {...props}
    >
      {children}
    </Flex>
  );
};
