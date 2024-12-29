const Error = ({ data }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-semibold text-red-600 mb-4">Oops!</h1>
        <p className="text-lg text-gray-700 mb-6">
          Something went wrong while fetching the data.
        </p>

        <div className="p-4 bg-red-100 text-red-600 border border-red-400 rounded">
          <p>Error: {data}</p>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 text-white bg-blue-600 hover:bg-blue-700 rounded-full"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
