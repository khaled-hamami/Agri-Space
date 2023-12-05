import { ThemeProvider } from "@emotion/react"
import { Box, Typography } from "@mui/material"
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
import { PostsPrivateRouter, LoginPrivateRouter } from "./utils/PrivateRouter"
import AccessDenied from "./pages/AccessDenied"
import AiResult from "./pages/aiResult"
export default function App() {
  //* theme configuration
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
            <Route element={<PostsPrivateRouter />}>
              <Route
                path="/myplant"
                element={
                  <React.Suspense fallback={<Loader />}>
                    <MyPlant />
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
                path="/news"
                element={
                  <React.Suspense fallback={<Loader />}>
                    <News />
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
            </Route>
            <Route
              path="/AiResult"
              element={
                <React.Suspense fallback={<Loader />}>
                  <AiResult />
                </React.Suspense>
              }
            />
            <Route element={<LoginPrivateRouter />}>
              <Route
                path="/login"
                element={
                  <React.Suspense fallback={<Loader />}>
                    <Login />
                  </React.Suspense>
                }
              />
            </Route>
            <Route path="/error" element={<AccessDenied message={"You are already logged in"} />} />
            <Route
              path="/*"
              element={
                <Typography sx={{ m: "150px 0 0 50px", fontSize: "2rem" }}>
                  Sorry this page doesnt exist
                </Typography>
              }
            />
          </Routes>
          <Options />
          <MobileNav setTheme={setDarkMode} />
        </Router>
      </Box>
    </ThemeProvider>
  )
}
