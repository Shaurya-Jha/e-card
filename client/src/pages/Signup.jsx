import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  Button,
  Container,
  Text,
} from "@chakra-ui/react";
// axios for api fetching
import axios from "axios";
// react toast for toast passing
import toast, { Toaster } from "react-hot-toast";

const SignupPage = () => {
  // properties of react-hook-form for form handling
  // initialized the useForm library
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  // form onsubmit handler
  const onSubmit = (data) => {
    // console.log(data);

    // const signupData = useForm().getValues();
    // console.log('signup data : ', signupData);

    const signupData = {
      userEmail: getValues("userEmail"),
      userPassword: getValues("userPassword"),
    };

    console.log(signupData);

    axios
      .post("http://localhost:5000/employee/signup", signupData)
      .then((response) => {
        // console.log(response.data);
        toast.success("Employee created successfully!");
      })
      .catch((error) => {
        // console.log(error);
        toast.error("Employee already exists");
      });

    reset();
  };

  return (
    <div className="flex justify-center items-center">
      <Container>
        <div className="flex justify-center my-4 py-4">
          <Text fontSize={"2xl"}>Signup your account</Text>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-100 p-4 rounded-2xl"
        >
          {/* email field */}
          <FormControl className="mt-2">
            <FormLabel>Email</FormLabel>
            <Input {...register("userEmail", { required: true })} />
            {errors.userEmail && (
              <Alert className="mt-1" status="error" variant="left-accent">
                <AlertIcon />
                Email is required...
              </Alert>
            )}
          </FormControl>

          {/* username field */}
          {/* <FormControl className="mt-2">
            <FormLabel>Username</FormLabel>
            <Input {...register("userName", { required: true })} />
            {errors.userName && (
              <Alert className="mt-1" status="error" variant="left-accent">
                <AlertIcon />
                Username is required...
              </Alert>
            )}
          </FormControl> */}

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
            <Button backgroundColor={"green"} color={"white"} type="submit">
              Sign-up
            </Button>
          </FormControl>
        </form>
      </Container>
      <Toaster />
    </div>
  );
};

export default SignupPage;
