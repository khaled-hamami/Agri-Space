import { BottomNavigation, BottomNavigationAction, Button, Paper } from "@mui/material"
import HomeIcon from "@mui/icons-material/Home"
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined"
import NewspaperIcon from "@mui/icons-material/Newspaper"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"
import YardOutlinedIcon from "@mui/icons-material/YardOutlined"

import { useLocation, useNavigate } from "react-router"
import { logout } from "../apis/logout"

export default function MobileNav({ setTheme }) {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "contrast.main",
        display: { sm: "none" },
        zIndex: 5,
      }}
      elevation={3}
    >
      <BottomNavigation
        showLabels={!window.onscroll}
        sx={{
          display: "flex",
          jutifyContent: "space-evenly",
          alignItems: "center",
          backgroundColor: "inherit",
          backdropFilter: "blur(15px)",
        }}
      >
        <BottomNavigationAction
          onClick={() => navigate("/")}
          label="Home"
          icon={
            <HomeIcon
              fontSize="medium"
              sx={{
                color: location.pathname === "/" ? "primary.main" : "",
              }}
            />
          }
        />
        <BottomNavigationAction
          sx={{
            px: window.innerWidth < 400 ? "0px" : "12",
          }}
          onClick={() => navigate("/market")}
          label="Market"
          icon={
            <StorefrontOutlinedIcon
              fontSize="medium"
              sx={{
                color: location.pathname === "/market" ? "primary.main" : "",
              }}
            />
          }
        />
        <BottomNavigationAction
          sx={{
            px: window.innerWidth < 400 ? "0px" : "12",
          }}
          onClick={() => navigate("/myplant")}
          label="My Plant"
          icon={
            <YardOutlinedIcon
              fontSize="medium"
              sx={{
                color: location.pathname === "/myplant" ? "primary.main" : "",
                p: window.innerWidth < 400 ? "0px" : "5px",
              }}
            />
          }
        />
        <BottomNavigationAction
          sx={{
            px: window.innerWidth < 400 ? "0px" : "12",
          }}
          onClick={() => navigate("/weather")}
          label="Weather"
          icon={
            <NewspaperIcon
              fontSize="medium"
              sx={{
                color: location.pathname === "/weather" ? "primary.main" : "",
              }}
            />
          }
        />
        <BottomNavigationAction
          sx={{
            px: window.innerWidth < 400 ? "0px" : "12",
          }}
          onClick={() => (sessionStorage.getItem("isLoggedIn") ? logout() : navigate("/login"))}
          label={sessionStorage.getItem("isLoggedIn") ? "Logout" : "Login"}
          icon={
            sessionStorage.getItem("isLoggedIn") ? (
              <LogoutIcon fontSize="medium" color="error" />
            ) : (
              <LoginIcon
                fontSize="medium"
                sx={{
                  color: location.pathname === "/login" ? "primary.main" : "",
                }}
              />
            )
          }
        />
      </BottomNavigation>
    </Paper>
  )
}
