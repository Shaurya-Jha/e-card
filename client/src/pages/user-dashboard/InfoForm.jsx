import {
  Container,
  Image,
  VStack,
  HStack,
  Input,
  Text,
  Button,
  FormControl,
  Textarea,
  Radio,
  RadioGroup,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
// edit icon
import { FaEdit } from "react-icons/fa";

const InfoForm = () => {
  return (
    <div>
      <Container
        // maxW="container.sm"
        maxW={"3xl"}
        className="border border-gray-200 p-4 bg-gray-100/50"
      >
        <div className="flex justify-center items-center my-4 pb-4">
          <Image
            boxSize={250}
            objectFit={"contain"}
            borderRadius="full"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="image"
          />
        </div>

        {/* form data fields */}
        {/* <div className="border border-gray-300 p-4 rounded-3xl"> */}
        {/* form data fields */}
        <form>

        <VStack spacing={4}>
        {/* fields for the data to be edited */}
        <FormControl>
            <HStack spacing={2}>
              <Text className="underline decoration-green-500 underline-offset-4 w-[200px]">
                First Name
              </Text>
              <Input contentEditable="false" value="your name" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Last Name</Text>
              <Input contentEditable="false" value="your number" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Email</Text>
              <Input contentEditable="false" value="your email" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Age</Text>
              <Input contentEditable="false" value="your age" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Phone Number</Text>
              <Input contentEditable="false" value="your date of birth" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Emergency Contact 1</Text>
              <Input contentEditable="false" value="your date of birth" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Emergency Contact 2</Text>
              <Input contentEditable="false" value="your date of birth" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Address</Text>
              <Textarea
                resize={"none"}
                contentEditable="false"
                value="some pre-fetched data will be shown here in this textarea field. you have to just verify"
              />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Blood Group</Text>
              <Input contentEditable="false" value="your blood group" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Allergy</Text>
              <Input contentEditable="false" value="your date of birth" />
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Medical Insurance</Text>
              <RadioGroup>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </RadioGroup>
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Any Surgery</Text>
              <RadioGroup>
                <Radio value="yes">Yes</Radio>
                <Radio value="no">No</Radio>
              </RadioGroup>
            </HStack>
          </FormControl>

          <FormControl>
            <HStack spacing={2}>
              <Text className="underline w-[200px]">Running Medicine</Text>
              <Input contentEditable="false" value="your date of birth" />
            </HStack>
          </FormControl>

        <Link to="/user-dashboard/edit-form">
            <Button marginTop={5} backgroundColor={"green"} color={"white"}>
              <FaEdit className="mr-2" />
              Edit
            </Button>
          </Link> 
        </VStack>
        </form>
        {/* </div> */}
      </Container>
    </div>
  );
};

export default InfoForm;
