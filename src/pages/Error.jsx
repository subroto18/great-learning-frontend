import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white shadow-md rounded-lg max-w-md w-full">
        <h1 className="text-6xl font-bold text-red-500">{error.statusText}</h1>
        <p className="text-xl mt-4 text-gray-700">Oops! Page Not Found</p>
        <p className="text-gray-500 mt-2">{error.message}</p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Go Back Home
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
