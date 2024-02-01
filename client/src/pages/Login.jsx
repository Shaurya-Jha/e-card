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

const LoginPage = () => {
  // properties of react-hook-form for form handling
  // initialized the useForm library
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form onsubmit handler
  const onSubmit = (data) => {
    console.log(data);
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
            <FormLabel>Username</FormLabel>
            <Input {...register("userName", { required: true })} />
            {errors.userName && (
              <Alert className="mt-1" status="error" variant="left-accent">
                <AlertIcon />
                Username is required...
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
