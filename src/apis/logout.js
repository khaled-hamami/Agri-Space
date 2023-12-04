export const logout = () => {
  sessionStorage.removeItem("userId")
  sessionStorage.removeItem("firstName")
  sessionStorage.removeItem("lastName")
  sessionStorage.removeItem("location")
  sessionStorage.removeItem("email")
  sessionStorage.removeItem("password")
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("isLoggedIn")
  window.location.reload()
}
