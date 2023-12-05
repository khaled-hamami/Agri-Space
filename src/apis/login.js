export const login = async (userEmail, userPassword, setFetching, setError, setPayload) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_LOGIN_URL = import.meta.env.VITE_LOGIN_URL
    const response = await fetch(VITE_LOGIN_URL, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: userPassword,
      }),
    })

    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json()
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) setPayload(data.message)
    const { user_id, first_name, last_name, location, email, password, token } = data

    console.log(user_id)
    console.log(first_name)
    console.log(last_name)
    console.log(location)
    console.log(userEmail)
    console.log(userPassword)
    console.log(response)
    sessionStorage.setItem("userId", user_id)
    sessionStorage.setItem("firstName", first_name)
    sessionStorage.setItem("lastName", last_name)
    sessionStorage.setItem("location", location)
    sessionStorage.setItem("email", email)
    sessionStorage.setItem("password", password)
    // sessionStorage.setItem("token", token)//! there is no token currently
    sessionStorage.setItem("isLoggedIn", true)
    setError(false)
  } catch (err) {
    setError(true)
    setPayload(err.message)
  } finally {
    setFetching(false)
  }
}
