import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  Button,
  Container,
  Text
} from "@chakra-ui/react";
import axios from 'axios'

const LoginPage = () => {
  // properties of react-hook-form for form handling
  // initialized the useForm library
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  const userEmail = getValues("userEmail")
  const userPassword = getValues("userPassword")

  // form onsubmit handler
  const onSubmit = (data) => {
    console.log(data);

    axios.get("http://localhost:5000/employee/login", {userEmail, userPassword})
    .then((res) => {
      console.log(res.data);

      // if(res.data.email === userEmail && res.data.password === userPassword){
      //   console.log('user can login');
      // }
      // else{
      //   console.log('user doesn`t exist');
      // }
    })
    .catch((error) => {
      console.log(error);
    })
  };

  return (
    <div className="flex justify-center items-center">
      <Container>
        <div className="flex justify-center my-4 py-4">
          <Text fontSize={"2xl"}>Login to your account</Text>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-gray-100 p-4 rounded-2xl">
          {/* username field */}
          <FormControl className="mt-2">
            <FormLabel>Email</FormLabel>
            <Input {...register("userEmail", { required: true })} />
            {errors.userName && (
              <Alert className="mt-1" status="error" variant="left-accent">
                <AlertIcon />
                Email is required...
              </Alert>
            )}
          </FormControl>

          {/* password field */}
          <FormControl className="mt-2">
            <FormLabel>Password</FormLabel>
            <Input {...register("userPassword", { required: true })} />
            {errors.userPassword && (
              <Alert className="mt-1" status="error" variant="left-accent">
                <AlertIcon />
                Password is required...
              </Alert>
            )}
          </FormControl>

          <FormControl className="flex justify-center mt-4">
            <Button backgroundColor={"green"} color={"white"} type="submit">Log-in</Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;
