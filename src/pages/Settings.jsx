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

const ThemeSwitcher = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        "& + .MuiSwitch-track": {
          opacity: 1,
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.primary.main,
      width: 32,
      height: 32,
      "&:before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#028174",
    borderRadius: 20 / 2,
  },
}))
