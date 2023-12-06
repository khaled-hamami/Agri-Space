import { useTheme } from "@emotion/react"
import styled from "@emotion/styled"
import { Box, Button, Container, Divider, IconButton, Switch, Typography } from "@mui/material"
import { motion } from "framer-motion"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed"
export default function Settings({ setTheme }) {
  const theme = useTheme()

  return (
    <motion.div
      animate={{ translateX: 0 }}
      transition={{ duration: 0.3 }}
      initial={{
        translateX: Number(window.innerWidth),
      }}
      style={{
        width: "100%",
        minHeight: "100svh",
        borderStyle: "solid grey",
        backgroundColor: theme.palette.contrast.main,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          pt: { xs: "30px", sm: "90px", lg: "100px", xl: "110px" },
          px: { xs: "30px", sm: "60px", md: "80px", lg: "90px", xl: "100px" },
        }}
      >
        <fieldset
          style={{
            borderRadius: "5px",
            border: "solid 1px black",
            width: "90%",
            height: "90%",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "1.2rem", sm: "1.3rem", md: "1.5rem" },
              color: "contrast.reverse",
              fontWeight: "bolder",
            }}
          >
            SETTINGS
          </Typography>
          <Container
            sx={{
              my: "50px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Divider
              sx={{
                width: "100%",
                my: "50px",
                border: "1px solid black",
                borderColor: "contrast.reverse",
              }}
            />
            <Button
              endIcon={<AccountBoxIcon />}
              variant="outlined"
              fullWidth
              sx={{
                color: "contrast.reverse",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                textTransform: "lowercase",
              }}
            >
              update profile
            </Button>
            <Button
              endIcon={<DynamicFeedIcon />}
              variant="outlined"
              fullWidth
              sx={{
                color: "contrast.reverse",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                textTransform: "lowercase",
              }}
            >
              manage posts
            </Button>
            <Button
              component={"div"}
              endIcon={<DarkModeIcon />}
              variant="outlined"
              fullWidth
              sx={{
                color: "contrast.reverse",
                fontSize: { xs: "1rem", sm: "1.2rem", md: "1.3rem" },
                textTransform: "lowercase",
              }}
              onClick={() => {
                setTheme((prev) => !prev)
                localStorage.setItem(
                  "theme",
                  localStorage.getItem("theme") === "light" ? "dark" : "light"
                )
              }}
            >
              Toogle Theme
            </Button>
          </Container>
        </fieldset>
      </Box>
    </motion.div>
  )
}

