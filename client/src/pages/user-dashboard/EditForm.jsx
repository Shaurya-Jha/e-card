import {
  Container,
  Image,
  VStack,
  HStack,
  Input,
  Text,
  Button,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
// save icon
import { FaSave } from "react-icons/fa";

const EditForm = () => {
  // initialize the react-hook-form useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // handle form onsubmit
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <Container>
        {/* profile pic */}
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing={4}>
            {/* fields for the data to be edited */}
            <FormControl>
              <HStack spacing={2}>
                <Text>Name:</Text>
                <Input {...register("name")} />
              </HStack>
            </FormControl>

            <FormControl>
              <HStack spacing={2}>
                <Text>Email:</Text>
                <Input {...register("name")} />
              </HStack>
            </FormControl>

            <FormControl>
              <HStack spacing={2}>
                <Text>Number:</Text>
                <Input {...register("name")} />
              </HStack>
            </FormControl>

            <FormControl>
              <HStack spacing={2}>
                <Text>Age:</Text>
                <Input {...register("name")} />
              </HStack>
            </FormControl>

            <FormControl>
              <HStack spacing={2}>
                <Text>Date of Birth:</Text>
                <Input {...register("name")} />
              </HStack>
            </FormControl>

            {/* <FormControl className="flex justify-center"> */}
                <Button backgroundColor={"yellow"} type="submit"><FaSave className="mr-2" />Save changes</Button>
            {/* </FormControl> */}
          </VStack>
        </form>

        {/* <div className="border border-gray-300 p-4 rounded-3xl">
            <VStack alignContent={'center'}>
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
            </VStack>
          </div> */}
      </Container>
    </div>
  );
};

export default EditForm;
