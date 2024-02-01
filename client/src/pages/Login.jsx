import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  Button,
  Container,
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
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Button type="submit">Log-in</Button>
          </FormControl>
        </form>
      </Container>
    </div>
  );
};

export default LoginPage;
