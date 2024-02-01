import {
  Container,
  Image,
  VStack,
  HStack,
  Input,
  Text,
  Box,
} from "@chakra-ui/react";

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
            borderRadius='full'
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="image"
          />
          {/* </Box> */}
        </div>

        {/* form data fields */}
        <div>
          <VStack alignContent={'center'}>
            {/* <div className='flex'> */}
            <HStack spacing={2}>
              <Text>Name:</Text>
              <Input contentEditable="false" value={"your name"} />
            </HStack>
            {/* </div> */}
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
          </VStack>
        </div>
      </Container>
    </div>
  );
};

export default InfoForm;
