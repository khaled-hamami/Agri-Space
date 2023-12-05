import { Navigate, Outlet } from "react-router-dom"

export const PostsPrivateRouter = () => {
  let isAuthenticated = sessionStorage.getItem("isLoggedIn")

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}

export const LoginPrivateRouter = () => {
  let isAuthenticated = sessionStorage.getItem("isLoggedIn")

  return !isAuthenticated ? <Outlet /> : <Navigate to="/error" />
}
