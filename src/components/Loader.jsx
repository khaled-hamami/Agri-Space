import PropagateLoader from "react-spinners/PropagateLoader"
import { Box } from "@mui/material"

export default function Loader() {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <PropagateLoader
        color="0AB68B"
        loading
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </Box>
  )
}
