export const getNews = async (location, setFetching, setPayload, setMessage) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    let formData = new FormData()
    formData.append("location", location)
    const response = await fetch(`${VITE_BACKEND_URL}/weather`, {
      method: "POST",
      body: formData,
    })
    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json()
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) {
      setPayload(data)
    }
    return true
  } catch (err) {
    setPayload(err.message)
    return false
  } finally {
    setFetching(false)
  }
}
const demo = {
  location: {
    name: "Rades",
    region: "Tunis",
    country: "Tunisia",
    lat: 36.77,
    lon: 10.28,
    tz_id: "Africa/Tunis",
    localtime_epoch: 1701453971,
    localtime: "2023-12-01 19:06",
  },
  current: {
    last_updated_epoch: 1701453600,
    last_updated: "2023-12-01 19:00",
    temp_c: 20.0,
    temp_f: 68.1,
    is_day: 0,
    condition: {
      text: "Clear",
      icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
      code: 1000,
    },
    wind_mph: 9.4,
    wind_kph: 15.1,
    wind_degree: 188,
    wind_dir: "S",
    pressure_mb: 1007.0,
    pressure_in: 29.73,
    precip_mm: 0.0,
    precip_in: 0.0,
    humidity: 29,
    cloud: 6,
    feelslike_c: 20.0,
    feelslike_f: 68.1,
    vis_km: 10.0,
    vis_miles: 6.0,
    uv: 1.0,
    gust_mph: 19.7,
    gust_kph: 31.8,
  },
}
