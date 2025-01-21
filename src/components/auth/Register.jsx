import { Formik, Form } from "formik";

import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import Input from "../InputFields/Input";
import registerValidationSchema from "../../validation/register";
import { asyncRegister } from "../../slices/authSlice";

const Register = () => {
  const { registerFormData } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    try {
      dispatch(asyncRegister(values));
    } catch (error) {
      toast.error("Something went wrong while register!");
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={registerFormData}
      validationSchema={registerValidationSchema}
      onSubmit={handleSubmit}
      enableReinitialize // Ensures Formik updates when Redux state changes
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div className="mb-4">
            <Input
              id="name"
              type="text"
              name="name"
              label="Name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.name}
            />
          </div>

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
            Register
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
