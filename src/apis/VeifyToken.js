export const verifyToken = async (token, setTokenVerified, setFetching, setError, setPayload) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_SIGNUP_URL = import.meta.env.VITE_VERIFY_TOKEN
    const response = await fetch(VITE_SIGNUP_URL, {
      headers: {
        "content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        token: token,
      }),
    })

    if (!response.ok) throw new Error("Error. Please try again later")
    if (response.status === 200) setTokenVerified(true)
    else setTokenVerified(false)
  } catch (err) {
    setTokenVerified(false)
    setPayload(err.message)
  } finally {
    setFetching(false)
  }
}
