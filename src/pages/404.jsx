const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg max-w-lg w-full">
        <h1 className="text-7xl font-extrabold text-red-500">404</h1>
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mt-2">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Go Back Home
          </a>
        </div>
        <div className="mt-6 text-sm text-gray-400">
          <p>
            Need help?{" "}
            <a
              target="_blank"
              href="https://influencerlabs.in/contact.html"
              className="text-blue-500 hover:underline"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
