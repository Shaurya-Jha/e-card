import {
  Container,
  Image,
  VStack,
  HStack,
  Input,
  Text,
  Button,
  FormControl,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const InfoForm = () => {
  return (
    <div>
      <Container>
        <div className="flex justify-center items-center my-4 pb-4">
          {/* <Image src='https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='image' height={400} width={400} /> */}
          {/* <Box boxSize="sm"> */}
          <Image
            boxSize={250}
            objectFit={"contain"}
            borderRadius="full"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="image"
          />
          {/* </Box> */}
        </div>

        {/* form data fields */}
        {/* <div className="border border-gray-300 p-4 rounded-3xl"> */}
        {/* form data fields */}
        {/* <form> */}
        <VStack spacing={4}>
          {/* fields for the data to be edited */}
          <FormControl>
            <HStack spacing={2}>
              <Text className="underline decoration-green-500 underline-offset-4">
                Name:
              </Text>
              <Input contentEditable="false" value="your name" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline">Number:</Text>
              <Input contentEditable="false" value="your number" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline">Email:</Text>
              <Input contentEditable="false" value="your email" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline">Age:</Text>
              <Input contentEditable="false" value="your age" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline">Date of Birth:</Text>
              <Input contentEditable="false" value="your date of birth" />
            </HStack>
          </FormControl>

          <Link to="/user-dashboard/edit-form">
            <Button marginTop={5} backgroundColor={"green"} color={"white"}>
              Edit
            </Button>
          </Link>
        </VStack>
        {/* </form> */}

        {/* <VStack alignContent={'center'}>
            <HStack spacing={2}>
              <Text>Name:</Text>
              <Input contentEditable="false" value={"your name"} />
            </HStack>
            <HStack spacing={2}>
              <Text>Email:</Text>
              <Input contentEditable="false" value={"your email"} />
            </HStack>

            <HStack spacing={2}>
              <Text>Number:</Text>
              <Input contentEditable="false" value={"your number"} />
            </HStack>

            <HStack spacing={2}>
              <Text>Age:</Text>
              <Input contentEditable="false" value={"your age"} />
            </HStack>

            <HStack spacing={2}>
              <Text>Occupation:</Text>
              <Input contentEditable="false" value={"your occupation"} />
            </HStack>

            <Button marginTop={5} backgroundColor={'green'} color={'white'}>Edit</Button>
          </VStack> */}
        {/* </div> */}
      </Container>
    </div>
  );
};

export default InfoForm;
