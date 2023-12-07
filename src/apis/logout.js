export const logout = () => {
  sessionStorage.removeItem("userId")
  sessionStorage.removeItem("firstName")
  sessionStorage.removeItem("lastName")
  sessionStorage.removeItem("location")
  sessionStorage.removeItem("email")
  sessionStorage.removeItem("password")
  sessionStorage.removeItem("token")
  sessionStorage.removeItem("isLoggedIn")
  //! to change and find solution  window.location.replace('/')
  window.location.reload()
}
