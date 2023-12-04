// export const getWeather = async () => {
//   try {
//     const params = new URLSearchParams({
//       access_key: import.meta.env.VITE_GET_WEATHER,
//       query: "Tunisia",
//     })

//     const response = await fetch(`http://api.weatherstack.com/current?${params}`)
//     console.log(response)
//     const data = await response.json()
//     console.log(data)
//   } catch (err) {
//     console.log(err)
//   }
// }
