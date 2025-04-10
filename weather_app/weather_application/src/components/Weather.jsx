const Weather = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-image bg-cover bg-no-repeat p-4">
      <div className="w-full max-w-md bg-black bg-opacity-50 backdrop-blur-lg rounded-3xl shadow-2xl p-6 text-white">
        <h1 className="text-4xl font-extrabold text-center mb-6 tracking-wide">
          🌍 Weather Forecast
        </h1>

        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter city name..."
            className="p-3 rounded-xl text-black focus:outline-none shadow-inner"
          />
          <button className="bg-white text-indigo-600 font-semibold py-2 rounded-xl hover:bg-indigo-100 ">
            🔍 Search Weather
          </button>
        </div>

        <div className="mt-6 text-center">
          <img
            src=""
            alt="weather-icon"
            className="mx-auto h-32 w-32 object-contain mb-4"
          />
          <h2 className="text-3xl font-bold">Jaipur</h2>
          <p className="text-xl capitalize">Cloud</p>
          <p className="text-5xl font-extrabold mt-2">56°C</p>

          <div className="grid grid-cols-3 gap-2 mt-6 text-sm text-white">
            <div className="bg-white bg-opacity-20 rounded-xl p-2">
              <p className="font-semibold">Humidity</p>
              <p>56%</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-2">
              <p className="font-semibold">Wind</p>
              <p>456 m/s</p>
            </div>
            <div className="bg-white bg-opacity-20 rounded-xl p-2">
              <p className="font-semibold">Clouds</p>
              <p>45%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
