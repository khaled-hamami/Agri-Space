import { Skeleton } from "@mui/material"

export default function NewsSkeleton() {
  // Define fetching and payload variables as needed
  const fetching = true // Example boolean value
  const payload = {} // Example payload object

  return (
    <Skeleton
      animation="wave"
      variant="rectangular"
      elevation={10}
      sx={{
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
    ></Skeleton>
  )
}
