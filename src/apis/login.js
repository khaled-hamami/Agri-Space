export const login = async (userEmail, userPassword, setFetching, setPayload) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    const response = await fetch(`${VITE_BACKEND_URL}/auth/login`, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    })

    //* handle success and errors

    if (!response) {
      setError(true)
      throw new Error("Error, please try again later")
    }
    const data = await response.json()
    if (response.status != 200) throw new Error("Email or password is incorrect")

    if (response.status === 200) setPayload(data.message)

    const { user_id, first_name, last_name, location, email, password, token } = data

    sessionStorage.setItem("token", token)
    sessionStorage.setItem("userId", user_id)
    sessionStorage.setItem("firstName", first_name)
    sessionStorage.setItem("lastName", last_name)
    sessionStorage.setItem("location", location)
    sessionStorage.setItem("email", email)
    sessionStorage.setItem("password", password)
    sessionStorage.setItem("isLoggedIn", true)
    return true
  } catch (err) {
    setPayload(err.message == "Failed to fetch" ? "Error, please try again later" : err.message)
    return false
  } finally {
    setFetching(false)
  }
}
