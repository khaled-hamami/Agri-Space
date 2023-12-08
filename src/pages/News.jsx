import { Box, Paper, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { getNews } from "../apis/getNews"
import backgroundImage from "../assets/images/newsBackground.jpg"
import NewsSkeleton from "../skeletons/newsSkeleton"

// const payload = {
//   location: {
//     name: "Rades",
//     region: "Tunis",
//     country: "Tunisia",
//     lat: 36.77,
//     lon: 10.28,
//     tz_id: "Africa/Tunis",
//     localtime_epoch: 1701453971,
//     localtime: "2023-12-01 19:06",
//   },
//   current: {
//     last_updated_epoch: 1701453600,
//     last_updated: "2023-12-01 19:00",
//     temp_c: 20.0,
//     temp_f: 68.1,
//     is_day: 0,
//     condition: {
//       text: "Clear",
//       icon: "https://cdn.weatherapi.com/weather/64x64/night/113.png",
//       code: 1000,
//     },
//     wind_mph: 9.4,
//     wind_kph: 15.1,
//     wind_degree: 188,
//     wind_dir: "S",
//     pressure_mb: 1007.0,
//     pressure_in: 29.73,
//     precip_mm: 0.0,
//     precip_in: 0.0,
//     humidity: 29,
//     cloud: 6,
//     feelslike_c: 20.0,
//     feelslike_f: 68.1,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     uv: 1.0,
//     gust_mph: 19.7,
//     gust_kph: 31.8,
//   },
// }

export default function News() {
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(true)
  const [payload, setPayload] = useState({})
  const [message, setMessage] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  useEffect(() => {
    const location = sessionStorage.getItem("location")
    const fetchData = async () => {
      getNews(location, setFetching, setPayload, setMessage).then((response) => {
        console.log(error)
        setError(!response)
      })
    }
    fetchData()
  }, [])
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100svh",
        backgroundColor: "contrast.main",
        pt: { xs: "30px", sm: "90px", lg: "100px", xl: "110px" },
        px: { xs: "0", sm: "60px", md: "80px", lg: "90px", xl: "100px" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      {fetching && <NewsSkeleton />}
      {!error ? (
        <Paper
          elevation={10}
          sx={{
            background: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            borderRadius: { xs: "30px", sm: "35px", md: "40px", lg: "45px", xl: "50px" },
            width: "98%",
            height: "45svh",
            display: "flex",
            px: { xs: "none", md: "100px" },
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: "80%", md: "20%" },
              height: { xs: "20%", sm: "30%", md: "100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "bolder",
                  fontSize: { xs: "1.6rem", sm: "1.7rem", md: "1.8rem", lg: "1.9rem", xl: "2rem" },
                }}
              >
                {payload?.location?.name || ""},
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "bolder",
                  fontSize: { xs: "1.6rem", sm: "1.7rem", md: "1.8rem", lg: "1.9rem", xl: "2rem" },
                }}
              >
                {payload?.location?.country || ""}
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "bolder",
                  fontSize: "1.3rem",
                }}
              >
                {payload?.location?.localtime || ""}
              </Typography>
            </Box>
            <Box>
              <img width="80px" src={payload?.current?.condition?.icon} />
            </Box>
            <Typography
              sx={{
                color: "#000",
                fontWeight: "bolder",
                fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.5rem", lg: "1.6rem", xl: "1.7rem" },
              }}
            >
              {payload?.current?.condition?.text || ""}
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "80%", md: "20%" },
              height: { xs: "20%", sm: "30%", md: "100%" },
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          ></Box>
          <Box
            sx={{
              width: { xs: "80%", md: "20%" },
              height: { xs: "20%", sm: "30%", md: "100%" },
              display: "flex",
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontWeight: "bolder",
                fontSize: { xs: "1.3rem", sm: "1.4rem", md: "1.5rem", lg: "1.6rem", xl: "1.7rem" },
              }}
            >
              tempurature
              <br />
              <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
                <div>{payload?.current?.temp_c || ""}c</div>|
                <div>{payload?.current?.temp_f || ""}f</div>
              </div>
            </Typography>
          </Box>
          <Box
            sx={{
              width: { xs: "80%", md: "20%" },
              height: { xs: "20%", sm: "30%", md: "100%" },
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              alignItems: "center",
            }}
          ></Box>
          <Box
            sx={{
              justifyContent: "center",
              width: { xs: "80%", md: "20%" },
              height: { xs: "20%", sm: "30%", md: "100%" },
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <div>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "bolder",
                  fontSize: {
                    xs: "1.3rem",
                    sm: "1.4rem",
                    md: "1.5rem",
                    lg: "1.6rem",
                    xl: "1.7rem",
                  },
                }}
              >
                humudity : {payload?.current?.humidity || ""}
              </Typography>
              <Typography
                sx={{
                  color: "#000",
                  fontWeight: "bolder",
                  fontSize: {
                    xs: "1.3rem",
                    sm: "1.4rem",
                    md: "1.5rem",
                    lg: "1.6rem",
                    xl: "1.7rem",
                  },
                }}
              >
                wind speed
                <br />
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  {payload?.current?.wind_kph || ""}kph |&nbsp;
                  {payload?.current?.wind_mph || ""}mph
                </div>
              </Typography>
            </div>
          </Box>
        </Paper>
      ) : (
        !fetching && (
          <Typography sx={{ fontSize: "1.5rem", colo: "contrast.main" }}>
            Oops! Download failed. Retry.
          </Typography>
        )
      )}
    </Box>
  )
}
