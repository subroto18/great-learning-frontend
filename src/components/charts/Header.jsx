import { useDispatch, useSelector } from "react-redux";
import { BAR, LINE, PIE } from "../../utils/helper";
import { setActiveChart } from "../../slices/chartSlice";

const Header = () => {
  const { activeChart } = useSelector((store) => store.chart);
  const dispatch = useDispatch();

  const handleChartSelection = (selectedChart) => {
    dispatch(setActiveChart(selectedChart));
  };

  return (
    <div className="bg-gray-100 p-4 shadow-md md:flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
      <div className="flex space-x-4 mt-2 md:mt-0">
        <button
          className={`px-4 py-2 rounded ${
            activeChart === BAR
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-200"
          }`}
          onClick={() => handleChartSelection(BAR)}
        >
          Bar Chart
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeChart === LINE
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-200"
          }`}
          onClick={() => handleChartSelection(LINE)}
        >
          Line Chart
        </button>
        <button
          className={`px-4 py-2 rounded ${
            activeChart === PIE
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 border border-gray-300 hover:bg-gray-200"
          }`}
          onClick={() => handleChartSelection(PIE)}
        >
          Pie Chart
        </button>
      </div>
    </div>
  );
};

export default Header;
