import { ThemeProvider } from "@emotion/react"
import { Box } from "@mui/material"
import React, { useEffect, useState } from "react"
import { Route, Routes } from "react-router"
import { BrowserRouter as Router } from "react-router-dom"
import { darkTheme, lightTheme } from "./config/theme"
import Home from "./pages/Home"
import Loader from "./components/Loader"
import Navbar from "./components/Navbar"
import MobileNav from "./components/MobileNav"
import News from "./pages/News"
import Options from "./components/Options"
import MyPlant from "./pages/MyPlant"
const Market = React.lazy(() => import("./pages/Market"))
const Login = React.lazy(() => import("./pages/Login"))
import Settings from "./pages/Settings"
import CreatePost from "./pages/CreatePost"

export default function App() {
  useEffect(() => {
    const checkTheme = () => {
      if (localStorage.getItem("theme") == null) localStorage.setItem("theme", "light")
    }

    checkTheme()
  }, [])
  const [darkMode, setDarkMode] = useState(localStorage.getItem("theme") == "dark" ? true : false)
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Box
        className="background"
        sx={{
          color: "primary.main",
          backgroundColor: "contrast.main",
          overflow: "hidden",
        }}
      >
        <Router>
          <Navbar setTheme={setDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/market"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Market />
                </React.Suspense>
              }
            />
            <Route
              path="/login"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Login />
                </React.Suspense>
              }
            />
            <Route
              path="/myplant"
              element={
                <React.Suspense fallback={<Loader />}>
                  <MyPlant />
                </React.Suspense>
              }
            />
            <Route
              path="/news"
              element={
                <React.Suspense fallback={<Loader />}>
                  <News />
                </React.Suspense>
              }
            />
            <Route
              path="/settings"
              element={
                <React.Suspense fallback={<Loader />}>
                  <Settings setTheme={setDarkMode} />
                </React.Suspense>
              }
            />
            <Route
              path="/createPost"
              element={
                <React.Suspense fallback={<Loader />}>
                  <CreatePost />
                </React.Suspense>
              }
            />
            <Route
              path="/*"
              element={<h1 style={{ marginTop: "150px" }}>Sorry this page doesnt exist</h1>}
            />
          </Routes>
          <Options />
          <MobileNav setTheme={setDarkMode} />
        </Router>
      </Box>
    </ThemeProvider>
  )
}
