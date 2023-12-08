export const getPosts = async (categorie, setFetching, setPayload, setError, Error) => {
  setFetching(true) //*a state to disable the submit button to prevent multiple requests
  try {
    const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL
    const url = `${VITE_BACKEND_URL}/${categorie}`
    // "http://localhost:3000/posts"
    const response = await fetch(url, {
      headers: {
        "content-type": "application/json",
      },
      method: "GET",
    })
    if (!response.ok) throw new Error("Error. Please try again later")
    const data = await response.json() 
    if (response.status === 401 || response.status === 400) throw new Error(data.message)
    if (response.status === 200) {
      setPayload(data)
      setError(false)
    }
  } catch (err) {
    setError(true)
    setPayload(err.message)
  } finally {
    setFetching(false)
  }
}
