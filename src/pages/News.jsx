import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { getNews } from "../apis/getNews"

export default function News() {
  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState(false)
  const [payload, setPayload] = useState(false)
  const [message, setMessage] = useState(false)
  useEffect(() => {
    const location = sessionStorage.getItem("location")
    const fetchData = async () => {
      getNews(location, setFetching, setPayload, setError, setMessage)
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
        px: { xs: "30px", sm: "60px", md: "80px", lg: "90px", xl: "100px" },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          borderRadius: "15px",
          width: "95%",
          height: "15svh",
          bgcolor: "red",
        }}
      ></Box>
    </Box>
  )
}
