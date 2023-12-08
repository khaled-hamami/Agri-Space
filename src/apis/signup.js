export const signup = async (
  firstName,
  lastName,
  delegation,
  email,
  password,
  setFetching,
  setPayload
) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    const response = await fetch(`${VITE_BACKEND_URL}/auth/register`, {
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

    //* handle success and errros

    if (!response) throw new Error(response.message)
    const data = await response.json()
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 201) {
      setPayload(data.message)
    }
    return true
  } catch (err) {
    setPayload(err.message == "Failed to fetch" ? "Error, please try again later" : err.message)
    return false
  } finally {
    setFetching(false)
  }
}
