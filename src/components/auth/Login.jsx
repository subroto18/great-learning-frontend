import { Formik, Form } from "formik";
import loginValidationSchema from "../../validation/login";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import Input from "../InputFields/Input";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginFormData } = useSelector((store) => store.auth);

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    let crediential = JSON.parse(localStorage.getItem("auth"));

    try {
      if (crediential) {
        const loggedInUser = crediential?.filter(
          (item) =>
            item.email === values.email && item.password === values.password
        );

        if (loggedInUser?.length > 0) {
          localStorage.setItem("loggedInUserName", loggedInUser?.[0]?.name); // set login user in local storage
          localStorage.setItem("loggedInUserEmail", values.email); // set login user in local storage
          toast.success("Logedin successful");
          navigate("/"); // redirect to home after login
        } else {
          toast.warning("User not found! Register first");
        }
      } else {
        toast.warning("User not found! Register first");
      }
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong while login");
    }
  };
  return (
    <Formik
      initialValues={loginFormData}
      validationSchema={loginValidationSchema}
      onSubmit={handleSubmit}
      enableReinitialize // Ensures Formik updates when Redux state changes
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div className="mb-4">
            <Input
              id="email"
              type="email"
              name="email"
              label="Email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.email}
            />
          </div>
          <div className="mb-4">
            <Input
              id="password"
              type="password"
              name="password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              handleChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              label={"Password"}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Login
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Login;
