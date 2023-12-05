import styled from "@emotion/styled"
import { AppBar, Button, IconButton, Switch } from "@mui/material"
import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router"
import logo from "../assets/images/logo.png"
import { useTheme } from "@emotion/react"
import "../styles/index.css"
import { Logout, LogoutOutlined } from "@mui/icons-material"
import { logout } from "../apis/logout"
export default function Navbar() {
  const theme = useTheme()
  const navigate = useNavigate()

  return (
    <AppBar
      sx={{
        backgroundColor: "contrast.main",
        display: { xs: "none", sm: "flex" },
        position: "fixed",
        top: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backdropFilter: "blur(15px)",
        transition: "transform 0.3s ease",
      }}
    >
      <div
        onClick={() => navigate("/")}
        style={{
          width: "100px",
          height: "100%",
          cursor: "pointer",
          diplay: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={logo}
          alt="logo"
          style={{
            width: "100%",
            filter: theme.palette.mode == "dark" ? "brightness(1.5)" : "",
            marginTop: "3px",
          }}
        />
      </div>
      <CustomNavLink
        to="/"
        style={({ isActive }) => {
          return { color: isActive ? "#028174" : "" }
        }}
      >
        Home
      </CustomNavLink>
      <CustomNavLink
        to="/market"
        style={({ isActive }) => {
          return { color: isActive ? "#028174" : "" }
        }}
      >
        Market
      </CustomNavLink>
      <CustomNavLink
        to="/myplant"
        style={({ isActive }) => {
          return { color: isActive ? "#028174" : "" }
        }}
      >
        My Plant
      </CustomNavLink>
      <CustomNavLink
        to="/news"
        style={({ isActive }) => {
          return { color: isActive ? "#028174" : "" }
        }}
      >
        News
      </CustomNavLink>
      {sessionStorage.getItem("isLoggedIn") ? (
        <Button color="error" variant="contained" endIcon={<Logout />} onClick={() => logout()}>
          Logout
        </Button>
      ) : (
        <CustomNavLink
          to="/login"
          style={({ isActive }) => {
            return { color: isActive ? "#028174" : "" }
          }}
        >
          Login
        </CustomNavLink>
      )}
    </AppBar>
  )
}
const CustomNavLink = styled(NavLink)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "1rem",
  fontWeight: "bolder",
  fontFamily: "Poppins, great-font, sans-serif",
  cursor: "pointer",
  position: "relative",
  color: theme.palette.mode === "light" ? "#333" : "#F8F8F8",
  transition: "color 0.3s ease",
  "&::after": {
    content: "''",
    position: "absolute",
    bottom: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: "2px",
    background: theme.palette.primary.main,
    transition: "width 0.3s cubic-bezier(0.165, 0.84, 0.44, 1.1)",
    transformOrigin: "center",
  },
  "&:hover": {
    "&::after": {
      width: "80%",
    },
  },

  // Responsive styling
  [theme.breakpoints.up("sm")]: {
    padding: ".3rem",
    fontSize: ".9rem",
  },
  [theme.breakpoints.up("md")]: {
    padding: ".7rem",
    fontSize: "1.1rem",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "1rem",
    fontSize: "1.1rem",
  },
}))
