import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const api = {
  key: "f9f995e5e556c4b8cca140be6996aa5e",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  const [realTime, setRealTime] = useState(new Date().toLocaleTimeString());

  const [query, setQuery] = useState(null);
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [weatherState, setWeatherState] = useState(null);

  const searchCity = (e) => {
    if (e.key === "Enter") {
      getWeatherData(query);
    }
  };

  const getWeatherData = (query = "Ho Chi Minh") => {
    if (query !== "") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => {
          if (!res.ok) {
            setData(null);
            throw Error("Không tìm thấy địa điểm này!");
          }
          return res.json();
        })
        .then((data) => {
          setError(null);
          setIsPending(false);
          setData(data);
          switch (data.weather[0].main) {
            case "Clouds":
              setWeatherState("Nhiều mây");
              break;

            case "Sunny":
              setWeatherState("Trời nắng");
              break;
            case "Rain":
              setWeatherState("Có mưa");
              break;
            case "Mist":
              setWeatherState("Ẩm ướt");
              break;
            default:
              break;
          }
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }
  };

  useEffect(() => {
    setInterval(() => {
      setRealTime(new Date().toLocaleTimeString());
    }, 1000);
    getWeatherData();
  }, []);

  const dateBuilder = (d) => {
    let days = [
      "Chủ Nhật",
      "Thứ Hai",
      "Thứ Ba",
      "Thứ Tư",
      "Thứ Năm",
      "Thứ Sáu",
      "Thứ Bảy",
    ];
    let months = [
      "Tháng Một",
      "Tháng Hai",
      "Tháng Ba",
      "Tháng Tư",
      "Tháng Năm",
      "Tháng Sáu",
      "Tháng Bảy",
      "Tháng Tám",
      "Tháng Chín",
      "Tháng Mười",
      "Tháng Mười Một",
      "Tháng Mười Hai",
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date} ${month} ${year}`;
  };

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input
            type="text"
            className="search-bar"
            placeholder="Ho Chi Minh, Ha Noi, ..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
            onKeyPress={(e) => searchCity(e)}
          />
        </div>
        <div className="location-box">
          {data && (
            <div className="location">
              {data.name}, {data.sys.country}
            </div>
          )}
          <div className="date">{dateBuilder(new Date())}</div>
          <div className="live-clock">
            <FontAwesomeIcon className="clock-icon" icon={faClock} />
            {realTime}
          </div>
        </div>
        <div className="weather-box">
          {error && <div className="notification">{error}</div>}
          {isPending && (
            <div className="notification">Đang tải dữ liệu ...</div>
          )}
          {data && (
            <div>
              <div className="temp">{Math.round(data.main.temp, -1)}°c</div>
              <div className="weather">{weatherState}</div>
              <div className="weather-info">Độ ẩm: {data.main.humidity}%</div>
              <div className="weather-info">
                Tốc độ gió: {data.wind.speed} m/s
              </div>
              <div className="weather-info">Độ mây phủ: {data.clouds.all}%</div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
