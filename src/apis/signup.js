export const signup = async (
  firstName,
  lastName,
  delegation,
  email,
  password,
  setFetching,
  setError,
  setPayload
) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_SIGNUP_URL = import.meta.env.VITE_SIGNUP_URL
    const response = await fetch(VITE_SIGNUP_URL, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
        first_name: firstName,
        last_name: lastName,
        location: delegation,
      }),
    })
    console.log(firstName)
    console.log(lastName)
    console.log(delegation)
    console.log(email)
    console.log(password)
    if (!response.ok) throw new Error("Error. Please try again later")
    console.log(response.ok)
    const data = await response.json()
    console.log(data)
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 201) setPayload(data.message)
  } catch (err) {
    console.log(err)
    setError(true)
    setPayload(err.message)
  } finally {
    setFetching(false)
  }
}
