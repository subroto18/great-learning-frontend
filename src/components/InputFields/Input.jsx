import { ErrorMessage } from "formik";
const Input = ({
  handleChange,
  handleBlur,
  value,
  name,
  type,
  placeholder,
  id,
  label,
}) => {
  return (
    <>
      <label
        htmlFor={id ? id : name}
        className="block text-gray-700 font-medium mb-2"
      >
        {label}
      </label>
      <input
        id={id ? id : name}
        type={type ? type : "text"}
        name={name}
        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      <ErrorMessage className="text-red-500" name={name} component="div" />
    </>
  );
};

export default Input;
