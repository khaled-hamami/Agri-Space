import { Box, Typography } from "@mui/material"
import React from "react"
export default function AccessDenied({ message }) {
  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100svh",
        backgroundAttachment: "fixed",
        backgroundColor: "contrast.main",
        pt: { xs: "30px", sm: "90px", lg: "100px", xl: "110px" },
        px: { xs: "30px", sm: "60px", md: "80px", lg: "90px", xl: "100px" },
        mb: "50px",
        overflow: "hidden",
      }}
    >
      <Typography sx={{ mt: "50px", fontSize: "2rem" }}>{message}</Typography>
    </Box>
  )
}
